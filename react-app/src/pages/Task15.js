// 6. Создайте стейт number, setNumber. 
// Первоначальное значение 1. Компонент
// возвращает кнопку и параграф, в котором
//  отображается значение состояния
// number с помощью jsx. Ваша задача так реализовать
//  функционал, чтобы при клике
// на кнопку автоматически прибавлялась +1 к стейту
//  number

import { TextField, Button } from '@mui/material'
import { useState } from "react"

function Task15() {
    const [number, setNumber] = useState(0)

    function changeValue() {
        setNumber(number + 1)
    }

    return (
        <>
            <p>{number}</p>
            <Button onClick={changeValue} variant="outlined" >click</Button>

        </>
    )
}

export default Task15