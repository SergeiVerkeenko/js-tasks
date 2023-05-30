import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { calculate } from '../slice/mathSlice';


function Math() {

    const count = useSelector(state => state.math.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState(0)
    return (
        <>
            <input type='text' onChange={(e) => setInput(e.target.value)} />
            <div>{count}</div>
            <button onClick={()=>dispatch(calculate(input))}>Равно</button>
        </>
    );
}

export default Math;