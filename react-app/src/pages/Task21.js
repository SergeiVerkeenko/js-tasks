import { useState } from "react"

function Task21() {

    const [value, setValue] = useState()
    const arr = []

    function show() {
        console.log(value);
        console.log(arr);
    }

    function saveInput(event) {
        setValue({ ...value, [event.target.name]: event.target.value })
        arr.push(value)
    }

    return (
        <div>
            <input name="name" onChange={saveInput} />
            <input name="surname" onChange={saveInput} />
            <input name="age" onChange={saveInput} />
            <button onClick={show}>button</button>
        </div>
    )
}
export default Task21
