import React,{useRef} from 'react'

function UseRefHook() {
    const inputRef = useRef(null);
    const onClick =() =>{
        inputRef.current.value = "";
        // inputRef.current.focus();
        inputRef.current.style.border="1px solid red";
    }
    return (
        <div>
           <input type="text" placeholder="enter something" ref={inputRef}/> 
           <button onClick={onClick}>Change name</button>
        </div>
    )
}

export default UseRefHook
