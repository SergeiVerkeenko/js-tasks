import { useEffect, useState } from "react"
import axios from 'axios'

function Task18() {
    const [value, setValue] = useState()

    async function requets() {
        const response = await axios.get('https://api.ipify.org/?format=json ')
        setValue(response.data.ip)
    }

    useEffect(() => {
        requets()
    }, [])

    return (

        <>
            <div>{value}</div>
        </>
    )

}
export default Task18
