import React, { useContext  } from 'react'
import {QuizContext} from "../Helpers/Contexts"
import Home from '../images/homeIllustration.png'
import '../App.css';

function MainMenu(){
    const {gameState,setGameState} = useContext(QuizContext); 
    return(
    <div className="App">

    <img className="HomeIllustration" src={Home} alt="Home Page Illustartion"></img>
    <h1 className="title">MeshQuiz</h1>

    <div className="input">
      <div className="fieldName">NAME</div>
      <input className="w3-input inputField" placeholder="Enter Your Name" />
      
      <div className="fieldName">ROLL NUMBER</div>
      <input className="w3-input inputField" placeholder="12XXXXXX" />

      <button 
      onClick={() => {
          setGameState("quiz");
        }}
      className="homeButton"> Continue </button>
    </div>

  </div>
  );
}

export default MainMenu;