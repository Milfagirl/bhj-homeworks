'use strict'
function getCounter() {
    const bakery = document.getElementById('cookie')
    const clicker = document.getElementById('clicker__counter')
    let counter = 0

    bakery.onclick = function () {
        bakery.animate([
            // keyframes
            { width: '230px' },
            { width: '200px' }
        ], {
            // timing options
            duration: 100,
            iterations: 1
        })

        ++counter
        clicker.textContent = counter
    }
}

getCounter()