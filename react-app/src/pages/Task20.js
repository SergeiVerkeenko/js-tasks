import { useState } from "react"

function Task19() {
    const [name, setName] = useState()
    const [surname, setSurame] = useState()
    const [age, setAge] = useState()

    function showValue() {
        console.log({ name, surname, age });

    }


    return (


        <>
            <input onChange={(event) => setName(event.target.value)} />
            <input onChange={(event) => setSurame(event.target.value)} />
            <input onChange={(event) => setAge(event.target.value)} />
            <button onClick={showValue}></button>
        </>
    )
}
export default Task19

