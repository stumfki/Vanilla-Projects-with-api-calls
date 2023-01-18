import {favMovies, savedMoviesId} from "./index.js"

console.log(favMovies)
console.log(savedMoviesId)
render()
function render() {

for(let movie in favMovies) {


document.getElementById('movieContainer').innerHTML += `<div class="movieCont">
<div class="d-flex justify-content-center mt-5">
<div class="row col-3 me-5 col-lg-3">
    <img src=${favMovies[movie]["Poster"] ==  "N/A" ? "./img/noimage.jpg" : favMovies[movie]["Poster"]} class="">
    </div>
   
    <div class="flex-row w-50 mt-4">
    <div class="row">
    <div class="col">
        <div class="d-flex flex-row align-items-center">
        <h1 class="p-2">${favMovies[movie]["Title"]}</h1>
        <img src="./img/star.svg" class="p-2 imgStar"/>
        <p class="text-center p-2 mt-3">${favMovies[movie]["imdbRating"]}</p>
    </div>
    </div>
</div>
<div class="w-100">
<div class="col">
    <div class="d-flex flex-row">
    <div class="runtime col-xl-6">
    <p class="p-2">${favMovies[movie]["Runtime"]}</p>
    </div>
    <div class="genre" col-xl-12>
    <p class="p-2">${favMovies[movie]["Genre"]}</p>
    </div>
    <div class="buttonSection col-xl-4">
    <button class="p-2 ms-1 mt-2 me-2" id="${movie}"}></button>
    </div>
    <div class="watchlist col-xl-4">
    <h2 class="p-2">Remove</h2>
    
</div>
</div>
</div>
<div class="row">
<div class="col movieText"><p class="movieTitle">${favMovies[movie]["Plot"]}</p></div>
</div>
    </div>
</div>
</div>
</div>

` 

} 
}

document.addEventListener('click', function(e) {
   
    if(e.target.id.length === 1) {
        document.getElementById('movieContainer').innerHTML = ""
        let toDel = Number(e.target.id)
        favMovies.splice(toDel,1)
savedMoviesId.splice(toDel,1)
console.log(savedMoviesId)
console.log(favMovies)
localStorage.setItem('savedMoviesId', JSON.stringify(savedMoviesId));
localStorage.setItem('favMovies', JSON.stringify(favMovies));
render()
    }
})


