const menuLink = document.querySelectorAll('.menu__link')

menuLink.forEach(value => {
    value.onclick = (event) => {
       
        if (value.parentElement.children.length > 1){
            event.preventDefault()
            value.parentElement.children[1].classList.add('menu_active')
        } 
        
    }
})
