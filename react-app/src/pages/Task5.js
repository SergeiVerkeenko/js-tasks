// 5. На входе статичный массив чисел и букв. Ваша задача отобразить на странице в
// случае числа четность и нечетность текущего значения в параграфе, в случае
// строки отобразить саму строку в параграфе

function Task5() {
    const arr = ['test', 1, 2, 4, 'test2']
    return (
        <>
            {arr.map(el => isNaN(el) ? <p>{el}</p> : <p>число {el} {el%2===0?'четное':'не четное'}</p>)}
        </>
    )
}

export default Task5