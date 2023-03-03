// 3. По клику на кнопку собрать данные из 
// input и проверить вводимую строку на
// почту

import { TextField, Button } from '@mui/material'
import { useState } from "react"

function Task12() {

    const [value, changeValue] = useState()

    function onChange(event) {
        changeValue(event.target.value)

    }

    function checkEmail() {
        try {
            if (!/^[\w\-\.\!\@\#\$\%\^\&\*\+\=]+@[A-Za-z]+\.[a-z]{2,5}$/gm.test(value)) throw new Error('Ошибка! Не емаил')
            alert('SUCCESS')
        } catch (error) {
            alert(error.message)
        }

    }

    return (
        <>
            <TextField onChange={onChange} id="standard-basic" label="Standard" variant="standard" />
            <Button onClick={checkEmail} variant="outlined" >click</Button>

        </>
    )
}

export default Task12