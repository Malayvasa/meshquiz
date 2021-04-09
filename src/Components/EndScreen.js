import React, { useState, useContext } from 'react'
import WellDone from "../images/wellDone.png"
import Check from "../images/check.png"
import {QuizContext} from "../Helpers/Contexts"
import {Questions} from "../Helpers/QuestionList"

function EndScreen(){
    const {setGameState, score, setScore} = useContext(QuizContext);
    const startAgain = () => {
        setScore(0);
        setGameState("menu");
    }


    return(<div className="App">
         
        <div className="End">
            <img className="wellDone" src={WellDone} alt="Home Page Illustartion"></img>
            <img className="CheckIllustration" src={Check} alt="Home Page Illustartion"></img>
        </div>
        
        <h1 className="title">Well Done!</h1>
        <p className="subtitle"> {score}/{Questions.length} answered correctly
        <br></br>
        You have unlocked {score*0.25}hrs
        <br></br>
        access to CowMesh
        </p>

        <button className="nextButton" onClick={startAgain}>Redeem</button>
    </div>)
}

export default EndScreen;