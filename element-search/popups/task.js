'use strict'

window.onload = () => {
    const modal = document.getElementById('modal_main')
    modal.classList.add('modal_active')
    const close = document.getElementsByClassName('modal__close')
    console.log(close)
    close.item(0).onclick = function () {
        modal.classList.remove('modal_active')
    }
    const success = document.getElementsByClassName('show-success')
    console.log(success)
    success.item(0).onclick = function () {
       
       document.getElementById('modal_main').style.display = 'none'
       document.getElementById('modal_success').style.display = 'block'

    }
}

