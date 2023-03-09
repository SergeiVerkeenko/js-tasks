import { useState } from "react"

function Task21() {
    const [value, setValue] = useState(0)

    function plus() {
        setValue(value + 1)
    }
    function minus() {

        setValue(value - 1)
    }

    return (
        <>
            <button onClick={plus}>+</button>
            <div>{value}</div>
            <button onClick={minus}>-</button>
        </>
    )
}
export default Task21
