// Два автомобиля едут друг к другу с постоянными 
// скоростями V1 и V2 км/ч.
// Определите, через какое время автомобили встретятся,
//  если расстояние между
// ними равно S км. Добавить проверку на ввод 
// только чисел
let s = prompt('rasstoyanie');
const v1 = prompt(' 1 auto');
const v2 = prompt(' 2 auto');
if (!isNaN(s) && !isNaN(v1) && !isNaN(v2)) {
    console.log(S / (v1 + v2));
} else {
    console.log(nekorr);
}
console.log((!isNaN(s) && !isNaN(v1) && !isNaN(v2)) ? console.log(S / (v1 + v2)) : console.log(nekorr));
