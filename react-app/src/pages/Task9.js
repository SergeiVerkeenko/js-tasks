// ; 4. У вас есть кнопка. После каждого нажатия менять ее цвет [‘red’, ‘white’, ‘blue’]
// ; рандомно

function Task9() {
    let arr = ['red', 'blue', 'yellow']
    
    function changeColor(event) {
        let number = Math.round(Math.random() * 2)
        event.target.style = `background-color:${arr[number]}`
    }

    return (
        <>
            <button onClick={ changeColor }>change</button>
        </>
    )

}

export default Task9