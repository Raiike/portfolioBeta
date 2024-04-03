let projectAction = document.querySelectorAll('.project-container')
let pokeQuizzAction = document.querySelector('#pokeQuizz')
let morpionAction = document.querySelector('#morpion')
let hideDescription = document.querySelector('#moreProject')

projectAction.forEach(mod => {
    mod.addEventListener("mouseover", () => {
        // displayMorpion(mod.querySelector('.textProject'))
        showProjectDetails(mod)
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
}, 5000);

// function displayMorpion(element) {
//     element.classList.remove('hidden')
// }

function hideMorpion(element) {
    element.classList.add('hidden')
}

function showProjectDetails(element){
    showDes()
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
    let hideDescriptionZone = document.querySelector('#description-project')
    hideDescriptionZone.classList.add('hidden')
}

function showDes() {
    let hideDescriptionZone = document.querySelector('#description-project')
    hideDescriptionZone.classList.remove('hidden')
}

hideDes()

getDate()