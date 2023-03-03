import { TextField, Button } from '@mui/material'
import { useState } from "react"

function Task16() {
    const [number, setNumber] = useState(1)

    function plus() {
        setNumber(number + 1)
    }
    function minus() {
        setNumber(number - 1)
    }

    return (
        <>
            <p>{number}</p>
            <Button onClick={minus} variant="outlined" >-</Button>
            <Button onClick={plus} variant="outlined" >+</Button>

        </>
    )
}

export default Task16