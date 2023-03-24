import findIndexes from "./findIndexes";
import numberOfEmptySpacesFunc from "./numberOfEmptySpacesFunc";

export const generator = (arrayClone, score) => {
  let row = Math.floor(Math.random() * 4);
  let column = Math.floor(Math.random() * 4);
  let numberOfEmptySpaces = numberOfEmptySpacesFunc(arrayClone);
  let generatedScore;

  if (numberOfEmptySpaces === 16) {
    if (arrayClone[row][column].score === "") {
      if (Math.random() >= 0.9) {
        generatedScore = 4;
      }

      else {
        generatedScore = 2;
      }
      
      arrayClone[row][column].score = generatedScore;
      arrayClone[row][column].class = "appear";
      return [arrayClone, false, score];
    }
  }

  if (numberOfEmptySpaces !== 16) {
    let arrOfIndexes = findIndexes(arrayClone);
    if (arrOfIndexes[0].length !== 0) {
      let generatedSquare = Math.floor(Math.random() * arrOfIndexes[0].length);
      row = arrOfIndexes[0][generatedSquare][0];
      column = arrOfIndexes[0][generatedSquare][1];


      if (arrayClone[row][column].score === "") {
        if (Math.random() >= 0.9) {
          generatedScore = 4;
        }

        else {
          generatedScore = 2;
        }
        arrayClone[row][column].score = generatedScore;
        arrayClone[row][column].class = "appear";
        return [arrayClone, arrOfIndexes[1], score]
      }
    }
    else {
      return [arrayClone, arrOfIndexes[1], score];
    }
  }

}
