

function validate(event) {
    event.preventDefault();

    const err = document.querySelector('.error');
    const inp = document.querySelector('#name');

    if (inp.value === '') {
        err.innerHTML = 'Name cannot be empty'
        err.style.visibility = 'visible';
        err.style.opacity = '1';
    }
}

