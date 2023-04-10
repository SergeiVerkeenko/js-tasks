import axios from "axios"
import { useEffect, useState } from "react"

function Task24() {

    const [dot, setDot] = useState()

    async function get() {
        const response = await axios.get('http://localhost:3000/')
        setDot(response.data)
    }
    useEffect(() => {
        get()
    },[])
    return (
        <>
            <div> {dot}</div>
        </>
    )
}

export default Task24