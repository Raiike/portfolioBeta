let projectAction = document.querySelectorAll('.project-container')
let mp3main = new Audio('/assets/song/menups.mp3')
let hideDescription = document.querySelector('#moreTools')

projectAction.forEach(mod => {
    mod.addEventListener("mouseover", () => {
        showToolsDetails(mod)
    })
    // mod.addEventListener("mouseout", () => {
    //     hideDes()
    // })
});


function getDate() {
    let displayHour = document.querySelector('#hour')
    let displayHourFooter = document.querySelector('#hourF')
    let currentDate = new Date()
    displayHour.textContent = `${currentDate.getHours()}:${currentDate.getMinutes().toString().padStart(2, '0')}`
    displayHourFooter.textContent = `${currentDate.getHours()}:${currentDate.getMinutes().toString().padStart(2, '0')}`  
}
setInterval(() => {
    getDate()
}, 1000);

function hideMorpion(element) {
    element.classList.add('hidden')
}
function showToolsDetails(element){
    showDes()
    mp3main.play()
    let newText = document.querySelector('#projectName')
    newText.textContent = element.getAttribute('data-name')
    let newParagraph = document.querySelector('#presentation-text')
    newParagraph.textContent = element.querySelector('.text-value').innerText
}
hideDescription.addEventListener("mouseover", () => {
    hideDes()
})
hideDescription.addEventListener("mouseout", () => {
    showDes()
})
function hideDes() {
    let hideDescriptionZone = document.querySelector('#description-tools')
    hideDescriptionZone.classList.add('hidden')
}
function showDes() {
    let hideDescriptionZone = document.querySelector('#description-tools')
    hideDescriptionZone.classList.remove('hidden')
}

hideDes()
getDate()