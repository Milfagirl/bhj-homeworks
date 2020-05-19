let rotatorCase = document.querySelector('.rotator').firstElementChild
let datacolor
let dataspeed

let timer = setInterval(() => {
    if (!!rotatorCase.nextElementSibling) {
        datacolor = rotatorCase.dataset.color
        dataspeed = rotatorCase.dataset.speed - 1000
        setTimeout(() => {
            rotatorCase.classList.remove('rotator__case_active')
            rotatorCase.nextElementSibling.style.color = datacolor
            rotatorCase.nextElementSibling.classList.add('rotator__case_active')
            rotatorCase = rotatorCase.nextElementSibling
            console.log(rotatorCase)
        }, dataspeed)

    } else {

        rotatorCase.classList.remove('rotator__case_active')
        rotatorCase = document.querySelector('.rotator').firstElementChild
        datacolor = rotatorCase.dataset.color
        dataspeed = rotatorCase.dataset.speed - 1000
        setTimeout(() => {
            rotatorCase.style.color = datacolor
            rotatorCase.classList.add('rotator__case_active')
        }, dataspeed)

    }

}, 1000)



document.onclick = () => {
    clearInterval(timer)
}



