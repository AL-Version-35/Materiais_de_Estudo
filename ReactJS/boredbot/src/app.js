import getIdea from './getIdea'

function App() {
    return (
        document.getElementById("bored-bot").addEventListener("click", getIdea)
    )
}

export default App