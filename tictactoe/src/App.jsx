import Player from "./Player"
import GameBoard from "./GameBoard"
import { useState } from "react"
import Log from "./Log"


function App() {

  const[activePlayer,setActivePlayer]=useState('X')

  const[gameTurns,setGameTurns]=useState([])

  function handleSelectSquare(rowIndex,colIndex){
    setActivePlayer((curActivePlayer)=> curActivePlayer==='X'?'O':'X');
    setGameTurns(prevTurns=>{
      let currentPlayer='X';
    });  
  }
  

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="MissX" symbol="X" isActive={activePlayer==='X'}></Player>
          <Player initialName="MisterQ" symbol="O" isActive={activePlayer==='O'}></Player>

        </ol>
        <GameBoard onSelectSquare={()=>{handleSelectSquare(rowIndex,colIndex)}} activePlayerSymbol={activePlayer}></GameBoard>
      </div>
      <Log></Log>
    </main>
  )
}

export default App
