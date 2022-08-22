// 7. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до
// сотых.
const a = 379;
if (!isNaN(a)) {
    const b = (a ** 0.5)
    console.log(Math.round(b), b.toFixed(1), b.toFixed(2));
}
