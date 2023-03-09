import { useEffect, useState } from "react"
import Task23Item from "./Task23Item"

function Task23() {
    const [value, setValue] = useState(0)
    const [arr, setArr] = useState([])

    function doRandom() {
        const res = []
        let ar = []
        for (let i = 1; i < 10; i++) {
            ar.push(i)
            if (i % 3 == 0) {
                res.push(ar)
                ar = []
                setArr(res)
            }
        }

    }

    useEffect(() => {
        doRandom()
    }, [])


    return (
        <>
            <div>{value}</div>
            {arr.map((el, index) => <Task23Item setValue={setValue} item={el} key={index} />)}
        </>
    )
}
export default Task23


function car(a) {
    return (b) => {
        return (c) => {
            return c
        }
    }
}

console.log(car((1)(2)(3)));