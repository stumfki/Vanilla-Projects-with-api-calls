document.getElementById("bored-bot").addEventListener("click", getIdea)


function getIdea() {
    fetch("https://www.boredapi.com/api/activity")
    .then(response => response.json())
    .then(data => {
        document.getElementById('idea').innerHTML = data.activity
        console.log(document.getElementById('title').parentElement.parentElement.classList.add("fun"))
    })
   
}