import { useState } from "react"

function Task17() {
    const [value, setValue] = useState()

    function showContent(a) {
        if (a === 'About') {
            return setValue(<h1>привет</h1>)
        }
        else if (a === 'Blog') {

            return setValue(<h1>Аня</h1>)
        } else {

            return setValue(<h1>Пока, Аня</h1>)
        }
    }

    function getValue(event) {
        showContent(event.target.textContent)
    }
    
    return (
        <>
            <div onClick={getValue}>
                <p>About</p>
                <p>Blog</p>
                <p>Program</p>
            </div>
            {value}
        </>
    )
}

export default Task17