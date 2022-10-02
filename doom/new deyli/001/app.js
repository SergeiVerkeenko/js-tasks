const ul = document.querySelector('.ul');
ul.addEventListener('click', (event) => {
    document.querySelector('.res').innerHTML = event.target.textContent
})