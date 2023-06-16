import React from 'react'
import useWordGame from './hooks/wordGame.js'

function App() {
  const { typed, timeRemaining, isTimeRunning, wordCount, textBoxRef, handleChange, startGame } = useWordGame(10)

  return (
    <div>
      <br />
      <h1>O quão rápido você consegue digitar? (Use espaços para separar as palavras)</h1>
      <textarea
        ref={textBoxRef}
        value={typed}
        onChange={handleChange}
        disabled={!isTimeRunning}
      />
      <h4>Tempo Restante: {timeRemaining}</h4>
      <button onClick={startGame}
        disabled={isTimeRunning}>
        Começar
      </button>
      <h1>Contagem de Palavras: {wordCount}</h1>
    </div >
  )
}

export default App
