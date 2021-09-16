import React,{useState, useCallback} from 'react'
import Child from './Child';

function UseCallbackHook() {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState('Pls sub to the channel');

    const returnComment = useCallback(
        (name) => {
            return data+name;
        },
        [data]
    )

    return (
        <div>
        <Child returnComment={returnComment}/>
            <button onClick={() =>{
                setToggle(!toggle)
            }}
            >Button Toggle</button>
            {toggle && <h2>toggle</h2>}
        </div>
    )
}

export default UseCallbackHook
