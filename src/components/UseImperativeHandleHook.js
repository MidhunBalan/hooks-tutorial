import React,{useRef} from 'react';
import Button from './Button';


function UseImperativeHandleHook() {
    const buttonRef = useRef(null);

    return (
        <div>
            <button onClick={() =>{
                buttonRef.current.updateToggle();
            }}>Button from parent</button>
            <Button ref={buttonRef}/>
        </div>
    )
}

export default UseImperativeHandleHook
