import React, { useState, useContext } from 'react'
import {QuizContext} from "../Helpers/Contexts"
import {Questions} from "../Helpers/QuestionList"
import "../App.css"

function Quiz(){
    const {setGameState, score, setScore} = useContext(QuizContext); 
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if(Questions[currQuestion].answer === optionChosen){
         setScore(score+1);
        }
        setOptionChosen("");
        setCurrQuestion(currQuestion+1);
    }

    const finishQuiz = () => {
        if(Questions[currQuestion].answer === optionChosen){
            setScore(score+1);
       }
       setGameState("end");
    }

    return(
    <div className="App">
        <h1 className="questionName">Question {currQuestion+1} of {Questions.length} </h1>
        <div className="questionCopy">
            <p>{Questions[currQuestion].prompt}</p>
        </div>
        <h1 className="questionName"> Options </h1>
        <div className="options">

            <button className={optionChosen==="A"?'selectedButton':'optionButton'}
            onClick={()=>{setOptionChosen("A")}}>{Questions[currQuestion].optionA}
            </button>

            <button className={optionChosen==="B"?'selectedButton':'optionButton'}
            onClick={()=>{setOptionChosen("B")}}>{Questions[currQuestion].optionB}
            </button>

            <button className={optionChosen==="C"?'selectedButton':'optionButton'}
            onClick={()=>{setOptionChosen("C")}}>{Questions[currQuestion].optionC}
            </button>

            <button className={optionChosen==="D"?'selectedButton':'optionButton'}
            onClick={()=>{setOptionChosen("D")}}>{Questions[currQuestion].optionD}
            </button>
        </div>

        {currQuestion === Questions.length-1 ? (
            <button className="submitButton" onClick={finishQuiz}>Submit Answers</button>
        ):(
            <button className="nextButton" onClick={nextQuestion}>Next</button>
        )}

    </div>)
}

export default Quiz;