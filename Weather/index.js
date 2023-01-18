// Key 96c23a4d
let titleStorage = []
const CACHE_EXPIRATION_TIME = 86400; // 24 hours in seconds

fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
.then(resp => resp.json())
.then(data => {
  // Store the image URL and the cache expiration time in local storage
  localStorage.setItem('imageUrl', data.urls.full);
  localStorage.setItem('cacheExpirationTime', Date.now() + CACHE_EXPIRATION_TIME * 1000);

  // Update the background image
  
  document.body.style.backgroundImage = `url(${data.urls.full})`;
  document.getElementById('author').textContent =  `By: ${data.user.name}`;
  
})
.catch(err => {
  console.log('Unsplash API is Down');
  // Use a default image if the API is down
  document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`;
});

// Check if the cache has expired
if (localStorage.getItem('cacheExpirationTime') && localStorage.getItem('cacheExpirationTime') < Date.now()) {
  // Cache has expired, fetch a new image
  localStorage.removeItem('imageUrl');
  localStorage.removeItem('cacheExpirationTime');
} else if (localStorage.getItem('imageUrl')) {
  // Cache is still valid, use the cached image
  document.body.style.backgroundImage = `url(${localStorage.getItem('imageUrl')})`;
}

fetch('https://api.coingecko.com/api/v3/coins/chainlink')
.then(resp => {
    if (!resp.ok) {
        throw Error("Something went wrong")
    }
    return resp.json()})
.then(data => {
    console.log(data)
    document.getElementById('crypto').innerHTML = ` <div class="d-flex">
                    <img src="${data.image.small}" class="img-responsive"/>
                    <h1 class="ms-3 mt-1">${data.name}</h1>
                </div>`
    document.getElementById('currentPrice').innerHTML = `<h3>🎯Current Price: $${data.market_data.current_price.usd}`
    document.getElementById('24high').innerHTML = `<h3>⬆️24h high: $${data.market_data.high_24h.usd}`
    document.getElementById('24low').innerHTML = `<h3>⬇️24h low: $${data.market_data.low_24h.usd}`
})
.catch(err => {
    console.log('DogeCoin API is down')
   
})

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "medium"})
}

setInterval(getCurrentTime, 1000)

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
      },
      function(error) {
        console.error(error);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }


  navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
    .then(resp=> {
        if(!resp.ok) {
            throw Error('Weather data not avalible')
        }
        return resp.json()
    })
    .then(data => {
        console.log(data)
        document.getElementById('weather').innerHTML = ` <div class="d-flex justify-content-center">
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="img-responsive" id="weatherimg"/>
                    <h1 class="mt-1">${Math.round(data.main.temp)}°</h1>
                </div>
                <div class="d-flex justify-content-end  city">
                    <h3>${data.name}</h3>
                </div>`
    })
    .catch(err=> console.error(err))
})



https://anime-facts-rest-api.herokuapp.com/api/v1/:anime_name


fetch('https://meowfacts.herokuapp.com/?count=1')
.then(resp => {
    if (!resp.ok) {
        throw Error("Something went wrong")
    }
    return resp.json()})
.then(data => {
    console.log(data)
    document.getElementById('catFact').innerText = `${data.data[0]}`
   
})
.catch(err => {
    console.log('DogeCoin API is down')
   
})