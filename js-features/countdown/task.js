'use strict'

//#1
const getCounter = () => {
    const timerText = document.getElementById('timer')
    let timerValue = timerText.textContent
    let firstTimerValue = timerValue
    return setInterval(() => {
        --timerValue
        timerText.textContent = timerValue
        if (timerValue == 0) {
            timerText.textContent = timerValue
            alert('Вы победили в конкурсе!')
            timerValue = firstTimerValue
        }
    }, 100)
}
getCounter()


//#2 Не работает
// function getCounter(hour, minute, sec, winform) {
//     setInterval(() => {
//         if (sec > 0) {
//             --sec
//             winform.textContent = (`${hour}: ${minute}: ${sec}`)
//             console.log(winform.textContent)
//         } 
//     }, 500)
    
// }


// function timer() {
 
//     let timerText = document.getElementById('timer')  //переменная с текстом
//     let date = new Date(2020, 9, 5, 0, 1, 59)           // вносим новые данные
//     timerText.textContent = (`${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`)  //меняем данные в html
//     let sumTimerArray = 0                          // переменная для проверки времени
//     let timerArray = [date.getHours(), date.getMinutes(), date.getSeconds()]
//     sumTimerArray = timerArray[0] * 3600 + timerArray[1] * 60 + timerArray[2]
//     console.log(sumTimerArray)

//     do {
//         if ((timerArray[2] <= 59) && (timerArray[2] > 0)) {
//             getCounter(timerArray[0], timerArray[1], timerArray[2], timerText)
//             timerArray[2] = 0
//             sumTimerArray = timerArray[0] * 3600 + timerArray[1] * 60
//             console.log(timerArray + '----' + sumTimerArray)
//         } else if (sumTimerArray < 3600) {
//             --timerArray[1]
//             timerArray[2] = 59
//             timerText.textContent = (`${timerArray[0]}: ${timerArray[1]}: ${timerArray[2]}`)
//             sumTimerArray = timerArray[0] * 3600 + timerArray[1] * 60
//             console.log(timerArray + '----' + sumTimerArray)
//         } else {
//             --timerArray[0]
//             timerArray[1] = 58
//             timerArray[2] = 59
//             timerText.textContent = (`${timerArray[0]}: ${timerArray[1]}: ${timerArray[2]}`)
//             sumTimerArray = timerArray[0] * 3600 + timerArray[1] * 60
//             console.log(timerArray + '----' + sumTimerArray)
//         }
//     } while (sumTimerArray > 0)
// }

// timer()










