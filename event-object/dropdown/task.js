'use strict'
const list = document.getElementsByClassName('dropdown__list')
const value = document.getElementsByClassName('dropdown__value')
let dropitem = document.querySelectorAll('.dropdown__item')
value.item(0).addEventListener('click', () => {
    list.item(0).classList.add('dropdown__list_active')
})

dropitem.forEach(function (currentValue) {
    currentValue.addEventListener('click', (event) => {
        event.preventDefault()
        list.item(0).classList.remove('dropdown__list_active')
        value[0].textContent = currentValue.children[0].innerText
    })
})
