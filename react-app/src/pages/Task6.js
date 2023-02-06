// 1. На входе 2 статичные переменные пароля. По клику на кнопку необходимо
// реализовать метод валидации. Написать регулярное выражение: пароль от 8
// символов, содержит числа, буквы, !@#$%^&*+= 

function Task6() {
    const pwd1 = 'astikiasti'
    const pwd2 = 'astikiasti'
    function isValid() {
        try {
            if (!/^[\w\.\!\@\#\$\%\^\&\*\+\=]{8,}$/g.test(pwd1)) throw new Error('Щшибка')
            if (!/^[\w\.\!\@\#\$\%\^\&\*\+\=]{8,}$/g.test(pwd2)) throw new Error('Щшибка')
            if (pwd1 !== pwd2) throw new Error('не одинаковые')
            alert('SUCCESS')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <button onClick={isValid}>send</button>
        </>
    )
}

export default Task6