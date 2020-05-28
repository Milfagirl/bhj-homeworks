let fileData = document.getElementById('form')
progress.value = 0
fileData.addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(fileData)
    let request = new XMLHttpRequest()
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')
    request.upload.onprogress = (event) => {
        progress.value = event.loaded / event.total
    }

    // request.addEventListener('readystatechange', function () {
    //     for (let i = 1; i < 5; i++) {
    //         if (this.readyState == i) {
    //             progress.value += 0.2
    //         }
    //     }
    // })

    request.send(formData)
})