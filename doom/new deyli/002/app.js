const wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('change', function (event) {
    alert(event.target.value);
    event.target.value = ''
})