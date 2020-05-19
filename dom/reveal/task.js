const reveal = document.querySelectorAll('.reveal')
//console.log(reveal)
function getTop(array) {
    let arrPosY = []
    for (let i of array) {
        arrPosY.push([(i.getBoundingClientRect()).top, (i.getBoundingClientRect()).bottom])
    }
    return arrPosY
}

const posY = getTop(reveal)
//console.log(posY)

window.addEventListener('scroll', () => {
    //console.log(scrollY)
    for (let i in posY) {
        // console.log(i+'   '+scrollY+'   '+posY)
        if ((scrollY >= posY[i][0]) && (scrollY <= posY[i][1])) {
            // console.log(reveal[i])
            reveal[i].classList.toggle('reveal_active')
        }
    }

})