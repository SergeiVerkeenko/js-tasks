// 1. На странице контейнер из 5 инпутов. Необходимо по изменению кнопки
// получить значение соответствующего инпута и отобразить в alert (для того чтобы
// в контейнере по событию получить определенный элемент необходимо
// восользоваться ...)
const inp1 = document.querySelector('.inp1');
inp1.addEventListener('change',(event)=>{
    alert(event.target.value);
})
const inp2 = document.querySelector('.inp2');
inp2.addEventListener('change',(event)=>{
    alert(event.target.value);
})
const inp3 = document.querySelector('.inp3');
inp3.addEventListener('change',(event)=>{
    alert(event.target.value);
})
const inp4 = document.querySelector('.inp4');
inp4.addEventListener('change',(event)=>{
    alert(event.target.value);
})
const inp5 = document.querySelector('.inp5');
inp5.addEventListener('change',(event)=>{
    alert(event.target.value);
})