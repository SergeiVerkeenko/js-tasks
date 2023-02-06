// Репозиторий tasks:
// 1. На входе статичный массив чисел. Ваша задача каждое число массива возвести в
// квадрат и отобразить на странице 
function Task1() {
    const arr = [1, 1, 2, 3, 5, 1, 23, 87]
    const res = arr.map(el => el ** 2)
    return (
        <div>{res}</div>
    )
}

export default Task1