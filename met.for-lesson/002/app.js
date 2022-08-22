
// 2. Найдите квадратный корень числа.
//  Результат округлите до целых, десятых, сотых.
const a = 121;
if (!isNaN(a)) {
    const b = (a ** 0.5)
    console.log(Math.round(b), b.toFixed(1), b.toFixed(2));
}

