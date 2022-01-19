let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    classes = event.currentTarget.classList;
    if (classes.contains('decrease')) {
      count--;
    } else if (classes.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    
    // change color based on count value
    if (count < 0) {
      value.style.color = '#FF0000';
    }
    if (count > 0) {
      value.style.color = '#00FF00';
    }
    if (count === 0) {
      value.style.color = '#FFFFFF';
    }
    
    // update count on screen
    value.textContent = count;
  })
})