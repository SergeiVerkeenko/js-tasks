function Task23Item({ item, setValue }) {

    function show(event) {
        setValue(event.target.textContent)
    }


    
    return (
        <>

            <div onClick={show}>
                <span >
                    {item[0]}
                </span>
                <span >
                    {item[1]}

                </span>
                <span>
                    {item[2]}
                </span>
            </div>

        </>

    )

}


export default Task23Item

