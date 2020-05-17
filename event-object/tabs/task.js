'use strict'
const selectFromTab = Array.from(document.querySelectorAll('.tab'))  //массив элементов
const TextSelectFromTab = []   //массив текст .tab
const selectFromTabContent = document.querySelectorAll('.tab__content') //содержимое вкладок

selectFromTab.forEach(value => {
    TextSelectFromTab.push(value.innerText)
})

function getindex(string) {//поиск индекса по строке
    return TextSelectFromTab.indexOf(string)
}

document.onclick = (event) => {
    event instanceof MouseEvent
    let index
    console.log(event.target)
    
    if (event.target.className === 'tab') {
        selectFromTab.forEach(value => {//удаляем класс
            value.classList.remove('tab_active')
        })
        event.target.classList.add('tab_active')//добавляем класс по событию

        index = getindex(event.target.innerText)//получаем индекс текста 

        selectFromTabContent.forEach(value => {
            value.classList.remove('tab__content_active')
        })
        selectFromTabContent[index].classList.add('tab__content_active')
    }
}