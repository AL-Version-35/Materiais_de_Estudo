import { useState, useRef, useEffect } from 'react'

function useWordGame(startTime = 5) {
    const [typed, setTyped] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(startTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)

    function handleChange(event) {
        const { value } = event.target
        setTyped(value)
    }

    function calculateWordCount(typed) {
        const wordArray = typed.trim().split(" ")
        return wordArray.filter(word => word !== "").length
    }

    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(startTime)
        setTyped("")
        setWordCount(0)
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }

    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(typed))
    }

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else {
            endGame()
        }
    }, [isTimeRunning, timeRemaining])

    return {
        typed, timeRemaining, isTimeRunning, wordCount, textBoxRef, handleChange, startGame
    }
}

export default useWordGame