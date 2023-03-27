import React, { useContext, useState, useEffect } from 'react'
import { classStyles, emptyArr } from './variables/variables';
import './App.css';
import calculateSum from './functions/calculateSum';
import gameOverFunc from './functions/gameOverFunc';
import moving from './functions/moving';
import { generator } from './functions/generator';
import { Win } from './components/win';
import { StoreContext } from './store';
import { Lose } from './components/lose';
import { useSwipeable } from 'react-swipeable';


//Local function moved from component to make it global for using local states in App component
export let restart;


export const App = () => {

  let [score, setScore] = useState(0)
  let [gameOver, setGameOver] = useState(false);
  let [key, setKey] = useState("");
  let [array, setArr] = useState([])
  let sum = calculateSum(array);
  let [noMovingScenario, setData] = useState("");
  let [timer, setTimer] = useState("");


  const bestScore = localStorage.getItem("bestScore")

  //Win context
  const { win: [userWin, setWin], isWined: [wined, setWined] } = useContext(StoreContext)



  const handlers = useSwipeable({
    onSwipedLeft: () => setKey('ArrowLeft'),
    onSwipedDown: () => setKey('ArrowDown'),
    onSwipedUp: () => setKey('ArrowUp'),
    onSwipedRight: () => setKey('ArrowRight'),
    swipeDuration: 250
  })


  //detect keypress
  const detectKeydown = (e) => {
    //prevention from key without moves, providing useEffect infinite loop 
    if (noMovingScenario !== e.key && Date.now() - timer > 400) {
      setKey(e.key)
      setTimer(Date.now())
    }
  }

  //Create new gaming array
  restart = (array, numberOfmove) => {
    if (numberOfmove === 0) {
      let arrClone = JSON.parse(JSON.stringify(array));
      for (let i = 0; i < 2; i++) {
        generator(arrClone);
      }
      setArr(arrClone)
      setGameOver(false)
      setScore(0)
      setWin(false)
      setWined(false)
      setTimer(Date.now())
      return arrClone;
    }
  }


  useEffect(() => {
    let arr = [...array];

    //window event key catching
    window.addEventListener("keydown", detectKeydown);

    // control wheater some numbers were moved, to check wheater we should generate new number
    let arrayCopy = JSON.parse(JSON.stringify(arr));

    //create one dimential array from two dimential
    let flattedArray = arr.flat();

    //User loss
    let checkGameOver = flattedArray.filter(a => a.score === "").length === 0;

    //User win
    let userWinResult = flattedArray.filter(a => a.score === 2048).length !== 0;

    //win state
    if (!wined && userWinResult) {
      setWin(userWinResult);
      setWined(true);
    }

    //Game over condition
    if (checkGameOver) {
      setGameOver(() => gameOverFunc(arr));
      if (score > bestScore) {
        localStorage.setItem("bestScore", score);
      }
    }

    //Move actions
    if (!gameOver && key !== "") {
      let movingArray = moving(arr, arrayCopy, key, score);
      if (movingArray !== false) {
        let resArray = movingArray[0]
        let gameOver = movingArray[1]
        let resScore = movingArray[2]
        setGameOver(gameOver);
        setArr(resArray);
        setScore(resScore);
        setData("");
      }
      else setData(key);
    }

    // unset key
    setKey("")

    // unsubscibe listener
    return () => {
      window.removeEventListener("keydown", detectKeydown);
    }

    // Date.now() provides the key rerender
  }, [key && Date.now()]);




  if (sum === 0) {
    let restartArray = restart(emptyArr, 0);
    setArr(restartArray)
  }


  return (
    <div className="App">
      <div className="game">

        <div className="info">
          <div className="score">
            <div>
              <h1 className="title">2048</h1>
            </div>
            <div className="top__wrapper">
              <div className="score_button">
                <span>best</span>
                <h4 className="score_number">{bestScore}</h4>
              </div>
              <div className="score_button">
                <span>score</span>
                <h4 className="score_number">{score}</h4>
              </div>
            </div>
          </div>
          <button className="restart" onClick={() => restart(emptyArr, 0)}>New game</button>
        </div>
        <div>
          {gameOver ? <Lose /> : <></>}

          {userWin && !gameOver ? <Win /> : <></>}

          <div {...handlers} className={`playingArea`}>
            {
              array.map(a => a.map((item, index) => <div className={`square ${classStyles.filter(obj => obj.score === item.score).length === 1 ? classStyles.filter(obj => obj.score === item.score)[0].class : classStyles[0].class} ${item.class}`} key={index} >{item.score}</div>))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
