// 1. При вводе данных в input отображать вводимое значение в параграф текущей
// страницы
import { TextField } from '@mui/material'
import { useState } from 'react'

function Task10() {

    const [value, setValue] = useState()

    function setParagraph(event) {
        setValue(event.target.value)
    }

    return (


        <>
            <p>{value}</p>
            <TextField id="standard-basic" label="Standard" variant="standard" onChange={setParagraph} />
        </>
    )
}

export default Task10 