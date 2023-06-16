let postsArray = []
const postForm = document.getElementById("new-post")

function renderPosts(post) {
    let html = ""
    postsArray.map(post => {
        html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />`
    })
    document.getElementById("posts").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    })

postForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const postTitle = document.getElementById("post-title").value
    const postText = document.getElementById("post-text").value
    const data = {
        title: postTitle,
        body: postText
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()
            postForm.reset()
        })
})