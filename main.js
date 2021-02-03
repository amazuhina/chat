
//определяем кнопку
let button = document.querySelector('.button')

//определяем данные инпута
let input = document.querySelector('.input-message')

//определяем блок сообщения в окне диалога
let textMessage = document.querySelector('.text')

//определяем блок для времени
let $time = document.querySelector('.time')

//функция добавлять еще один блок сообщения к старым
function anotherMessage (){
    let newDiv ="<div class='message'><div class='text'></div><div class='time'></div></div>"
    document.querySelector('.message').innerHTML += newDiv
}
//Создаем нужный формат времени
    let date = new Date()
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }
    let optionsDate = date.toLocaleString("ru", options)

// Показать сообщение
function showMessage() {
    let noShow = document.querySelector('.message')
    noShow.style.display = 'block'

}

//функция после клика вставлять в блок сообщения инпут


button.addEventListener('click', function (event) {
    showMessage()
    textMessage.textContent = input.value
    $time.textContent = optionsDate
    input.value = ""
    anotherMessage()
})



/* вопросики:
   1) ну в целом чат не работает как должен
   2) как переносить строчку в блоке месседж и инпуте, если сообщение длинное
   3)нет полосы прокрутки
   4) див с месседж ушел влево зачем то
 */
