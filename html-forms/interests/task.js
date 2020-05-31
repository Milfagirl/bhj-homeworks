
const interestCheck = document.querySelectorAll('.interest__check');
let parent
let child

interestCheck.forEach( elem => {
  
    elem.addEventListener('click', (event) => {
        parent = event.currentTarget.closest('.interest');
        child = parent.querySelectorAll('.interest__check');
        child.forEach((box) => box.checked = event.currentTarget.checked);
    });
});