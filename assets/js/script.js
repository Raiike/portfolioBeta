let mp3main = new Audio('/assets/song/psmain.mp3')
let songstart = document.querySelector('#gibrilpfp')

songstart.addEventListener('click', ()=>{
    console.log("XD");
    mp3main.play()
})

function getDate() {
    let displayHour = document.querySelector('#hour')
    let currentDate = new Date()
    displayHour.textContent = `${currentDate.getHours()}:${currentDate.getMinutes().toString().padStart(2, '0')}` 
}

setInterval(() => {
    getDate()
}, 5000);

getDate()
