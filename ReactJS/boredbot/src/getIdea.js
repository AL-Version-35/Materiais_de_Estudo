function getIdea() {
  return (
    fetch("https://www.boredapi.com/api/activity")
      .then(res => res.json())
      .then(data => {
        document.body.classList.add("fun")
        document.getElementById("idea").textContent = data.activity
        document.getElementById("title").textContent = "HappyBot"
        document.body.classList.add("fun")
      }
      )
  )
}

export default getIdea
