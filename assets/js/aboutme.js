let mp3main = new Audio('/assets/song/menups.mp3')
let songstart = document.querySelector('#github-logo')
let displayCvDLtext = document.querySelector('#dlmycv')

songstart.addEventListener('click', ()=>{
    console.log("XD");
    mp3main.play()
})



songstart.addEventListener("mouseover", () => {
    displayGithubSentences()
})
songstart.addEventListener("mouseout", () => {
    hideGithubSentences()
})

displayCvDLtext.addEventListener("mouseover", () => {
    displaySentences()
})
displayCvDLtext.addEventListener("mouseout", () => {
    hideSentences()
})

function getDate() {
    let displayHour = document.querySelector('#hour')
    let displayHourFooter = document.querySelector('#hourF')
    let currentDate = new Date()
    displayHour.textContent = `${currentDate.getHours()}:${currentDate.getMinutes().toString().padStart(2, '0')}`
    displayHourFooter.textContent = `${currentDate.getHours()}:${currentDate.getMinutes().toString().padStart(2, '0')}`  
}

setInterval(() => {
    getDate()
}, 5000);

function displaySentences(){
    let action = document.querySelector('#dlmycv-text')
    action.classList.remove('hidden')
}

function hideSentences(){
    let action = document.querySelector('#dlmycv-text')
    action.classList.add('hidden')
}

function displayGithubSentences(){
    let action = document.querySelector('#myGithub-text')
    action.classList.remove('hidden')
}

function hideGithubSentences(){
    let action = document.querySelector('#myGithub-text')
    action.classList.add('hidden')
}

getDate()