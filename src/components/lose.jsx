import React from "react"
import { restart } from "../App";
import "../App.css"
import { emptyArr } from "../variables/variables";

export const Lose = () => {


    return (
        <div className="win__screen lose__screen">
            <div className="win__screen-wrapper">
                <div className="title__wrapper">
                    <h1 className="win__title">Game over!</h1>
                </div>
                <div className="buttons__wrapper">
                    <button className="game__buttons" onClick={() => restart(emptyArr, 0)}>Try again</button>
                </div>
            </div>
        </div>
    )
}

