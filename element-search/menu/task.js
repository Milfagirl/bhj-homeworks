const menuLink = document.querySelectorAll('.menu__link')
let index = document.querySelector('.menu_sub')
menuLink.forEach(value => {

    value.onclick = (event) => {
        index.classList.remove('menu_active')

        if (value.parentElement.children.length > 1) {
            event.preventDefault()
            value.parentElement.querySelector('.menu_sub').classList.add('menu_active')
        }
        index = value.parentElement.querySelector('.menu_sub')
    }
})
