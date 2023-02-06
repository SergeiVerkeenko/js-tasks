// 4. На входе статичный массив строк. 
// Ваша задача отобразить на странице все строки
// массива, а также картинку. 
// Каждая итерация будет возвращать
// <div>
// <p>el</p>
// <img/>
// </div>

function Task4() {
    const arr = ['test', 'test1', 'test2']
    return (
        <>
            {arr.map(el => <div><p>{el}</p><img alt='img'></img></div>)
            }
        </>
    )
}

export default Task4