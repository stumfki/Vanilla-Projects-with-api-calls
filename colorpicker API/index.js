// Remember to import the data and Dog class!
fetch('https://www.thecolorapi.com/scheme?hex=0047AB').then(resp => resp.json()).then(data => console.log(data))
console.log(document.getElementById('getColor').value)
let color1 = document.getElementById('1')
let color2 = document.getElementById('2')
let color3 = document.getElementById('3')
let color4 = document.getElementById('4')
let color5 = document.getElementById('5')

let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')
let text3 = document.getElementById('text3')
let text4 = document.getElementById('text4')
let text5 = document.getElementById('text5')
console.log(text1.textContent)
document.getElementById('getColor').addEventListener('click', function() {

    //Gets the Correct Hex
    let mode = document.getElementById('mode').value
    let value = document.getElementById('color').value.slice(1)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${value}&mode=${mode}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        console.log(data.colors)
        console.log(data.colors[0].hex.value)
       color1.style.backgroundColor = data.colors[0].hex.value
        text1.textContent = data.colors[0].hex.value
       color2.style.backgroundColor = data.colors[1].hex.value
         text2.textContent = data.colors[1].hex.value
       color3.style.backgroundColor = data.colors[2].hex.value
         text3.textContent = data.colors[2].hex.value
       color4.style.backgroundColor = data.colors[3].hex.value
        text4.textContent = data.colors[3].hex.value
       color5.style.backgroundColor = data.colors[4].hex.value
       text5.textContent = data.colors[4].hex.value
    } )

})
document.addEventListener("click",function(e) {
    console.log(e.target.id)
    if(e.target.id == 1) {
        navigator.clipboard.writeText(text1.textContent)
        alert('Copied to clipboard')
    } else if(e.target.id == 2 ) {
        navigator.clipboard.writeText(text2.textContent)
        alert('Copied to clipboard')
    }
    else if(e.target.id == 3 ) {
        navigator.clipboard.writeText(text3.textContent)
        alert('Copied to clipboard')
    }
    else if(e.target.id == 4 ) {
        navigator.clipboard.writeText(text4.textContent)
        alert('Copied to clipboard')
    }
    else if(e.target.id == 5 ) {
        navigator.clipboard.writeText(text5.textContent)
        alert('Copied to clipboard')
    }
})
function copyCode() {

}