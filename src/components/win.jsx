import React, { useContext } from "react"
import { restart } from "../App";
import "../App.css"
import { StoreContext } from "../store";
import { emptyArr } from "../variables/variables";

export const Win = () => {

    const { win: [userWin, setWin]} = React.useContext(StoreContext)

    return (
        <div className="win__screen">
            <div className="win__screen-wrapper">
                <div className="title__wrapper">
                    <h1 className="win__title">You win</h1>
                </div>
                <div className="buttons__wrapper">
                    <button className="game__buttons" onClick={() => setWin(false)}>Keep going!</button>
                    <button className="game__buttons" onClick={() => restart(emptyArr, 0)}>Try again</button>
                </div>
            </div>
        </div>
    )
}

