// Key 96c23a4d
let titleStorage = []




const buttonSearch = document.getElementById("submit");
const movieName = document.getElementById("movieName");
buttonSearch.addEventListener('click', async function(e) {
    e.preventDefault()
    console.log(movieName.value)
    titleStorage = []
    document.getElementById('movieContainer').innerHTML = ""
    const response = await fetch(`http://www.omdbapi.com/?s=${movieName.value}&plot=full&apikey=96c23a4d`)
    const movies = await response.json()
    for(let movie in movies["Search"]) {
        titleStorage.push(movies["Search"][movie]["imdbID"])
    }
    //Search the Api For the Movie Name
    findMovie(titleStorage)
    
})


async function findMovie(name) {
   
    let movieObj = ""
    
    
    for(let movie in titleStorage) {
        
        const response = await fetch(`http://www.omdbapi.com/?i=${titleStorage[movie]}&apikey=96c23a4d`)
    const movies = await response.json()
    console.log(movies)
    console.log(movies["Title"])

    document.getElementById('movieContainer').innerHTML += `<div class="movieCont">
    <div class="d-flex justify-content-center mt-5">
    <div class="row col-5 me-5 col-lg-3">
        <img src=${movies["Poster"] ==  "N/A" ? "./img/noimage.jpg" : movies["Poster"]} class="">
        </div>
       
        <div class="flex-row w-50 mt-4">
        <div class="row">
        <div class="col">
            <div class="d-flex flex-row align-items-center">
            <h1 class="p-2">${movies["Title"]}</h1>
            <img src="./img/star.svg" class="p-2 imgStar"/>
            <p class="text-center p-2 mt-3">${movies["imdbRating"]}</p>
        </div>
        </div>
    </div>
    <div class="w-100">
    <div class="col">
        <div class="d-flex flex-row">
        <div class="runtime col-xl-6">
        <p class="p-2">${movies["Runtime"]}</p>
        </div>
        <div class="genre" col-xl-12>
        <p class="p-2">${movies["Genre"]}</p>
        </div>
        <div class="buttonSection col-xl-4">
        <button type="button" class="p-2 ms-1 mt-2 me-2" id=${movies["imdbID"]} col-lg-4></button>
        </div>
        <div class="watchlist col-xl-4">
        <h2 class="p-2">WatchList</h2>
        </div>
    </div>
    </div>
</div>
<div class="row">
    <div class="col movieText"><p class="movieTitle">${movies["Plot"]}</p></div>
</div>
        </div>
    </div>
</div>


` 
    }
    
  
    return movieObj
}
let testLength = "tt0208092"
export let savedMoviesId = JSON.parse(localStorage.getItem('savedMoviesId')) || [];
export let favMovies = JSON.parse(localStorage.getItem('favMovies')) || [];

document.addEventListener('click', async function(e) {
   
    if(e.target.id.length === 9 && !savedMoviesId.includes(e.target.id) && e.target.id != "movieName"){
        const response = await fetch(`http://www.omdbapi.com/?i=${e.target.id}&apikey=96c23a4d`)
    const movies = await response.json()
    savedMoviesId.push(e.target.id)
    favMovies.push(movies)
    console.log(movies)
    console.log(favMovies)
    console.log(favMovies.includes(e.target.id))

    // Save the updated arrays to local storage
    localStorage.setItem('savedMoviesId', JSON.stringify(savedMoviesId));
    localStorage.setItem('favMovies', JSON.stringify(favMovies));
    } else if(savedMoviesId.includes(e.target.id) && e.target.id.length === 9 && e.target.id != "movieName") {
        alert("Already added to your watchlist")
    }
})


console.log(favMovies)






