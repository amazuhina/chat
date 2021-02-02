
/*
let button = document.querySelector('.button')


function getMessage () {
    let message = document.querySelector('.input').value
}


function showDialogue() {
    let one = document.querySelector('.one')
    one.textContent = message
}
*/

let button = document.querySelector('.button')

button.addEventListener('click', function (event) {
    let message = document.querySelector('.text-message').value
    let one = document.querySelector('.one')
    one.textContent = message


    
})

