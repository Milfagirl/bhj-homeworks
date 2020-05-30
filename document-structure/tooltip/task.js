const hasTooltip = document.querySelectorAll('.has-tooltip')

hasTooltip.forEach(element => {
    
    element.onclick = (event) => {
        event.preventDefault()
        element.insertAdjacentHTML("afterend",`<div class="tooltip">${element.getAttribute('title')}</div>`)
        document.querySelector('.tooltip').classList.toggle('tooltip_active')
        
    }


});