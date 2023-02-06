// 3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
// странице в тег li только те строки, которые содержат знак @

function Task3() {
    const arr = ['test', 'test@mail.ru', 'tesr@gmail.com']
    return (
       <>
       <ul>{arr.map(el => el.includes('@') ? <li>{el}</li> : null)}</ul>
       
       </> 
    )
}

export default Task3