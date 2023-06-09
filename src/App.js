import React, { useState } from "react"
import "./App.css"
import ResetGame from "./components/ResetGame.js"
import Square from "./components/Square.js"
import User from "./components/User.js"

const App = () => {
  //state hook for board
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

 // state hook for setting random treasure
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random()* board.length-1))
// sstate hook for setting bomb location
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random()* board.length-1))
  const [gameStatus, setGameStatus] = useState("Keep Searching")

// state hook for current user
const [user, setUser] = useState("")

const currentUser = (e) => {
  setUser(e.target.value)
  console.log(setUser)
}
  
  const  handleGamePlay = (index) => {
    let updatedBoard = [...board]
    if(index === bombLocation && gameStatus === "Keep Searching"){
      updatedBoard[index] = "💣"
      setGameStatus("You are dead :( ... reset board to play again")
    setBoard(updatedBoard)
    }else if(index === treasureLocation && gameStatus === "Keep Searching"){
      updatedBoard[index] = "💎"
      setGameStatus("YOU FOUND THE GEM!! Reset board to play again.")
    setBoard(updatedBoard)
    }else if( gameStatus === "Keep Searching"){
    updatedBoard[index] = "🌴"
    setBoard(updatedBoard)
    }
  }

  const resetState = () => {
    setBoard(board.map((value => "?")))
    setGameStatus("Keep Searching")
    setTreasureLocation(Math.floor(Math.random()* board.length))
    setBombLocation(Math.floor(Math.random()* board.length))  
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="input">
      <input
      type="text"
      onChange={currentUser}
      value={user}
      />
      <User user={user}/>
      </div>
      <h3>{gameStatus}</h3>
      <div className="gameboard">
        {board.map((value, index) => {
          return(
            <Square
            Key={index}
            value={value}
            index={index}
            handleGamePlay=
            {handleGamePlay}
            /> 
          ) 
        })}
        <ResetGame
        reset={resetState}
        />
        
      </div>
      <div className="scoreboard">
        <h3>scoreboard:</h3>
      </div>
      
     
    </>
  )
}

export default App
