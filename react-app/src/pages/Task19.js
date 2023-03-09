import { useState } from "react"
function Task19() {
    const [name, setName] = useState()

    function requets() {
        console.log(name);
    }

    function saveInput(event) {
        setName(event.target.value)

    }



    return (

        <>

            <input onChange={saveInput} />
            <button onClick={requets}>button</button>
        </>
    )
}
export default Task19
