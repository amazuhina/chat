

//определяем кнопку
let $button = document.querySelector('.button')

//определяем окно диалога
let $dialogue = document.querySelector('.dialogue')
let $input = document.querySelector('.input-message')


function newDiv(message, time) {
    return '<div class="message"><div class="text">'+message+'</div><div class="time">'+time+'</div></div>'
}


function sendMessage() {
    let date = new Date()
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }
    let optionsDate = date.toLocaleString("ru", options)

    let message = $input.value
    let time = optionsDate

    $dialogue.innerHTML += newDiv(message, time)

    // clear input
    $input.value = ""
}


$input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        sendMessage()
    }
})


//связка
$button.addEventListener('click', function (event) {
    sendMessage()
})

// как будто хочется диву месседж присвоить еще один клас

/*
вопросики:
1. нашла только overflow-y: scroll;
2. textarea некрасиво смотрится
3. гитхаб =(
 */