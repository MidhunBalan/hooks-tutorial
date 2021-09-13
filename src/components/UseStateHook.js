import React,{useState} from 'react'

// This is an example for useState hook
function UseStateHook() {
    const [inputValue, setInputValue] = useState('');
    const handleOnchange = (e) =>{
        setInputValue(e.target.value);
    }
    return (
        <div>
            <input placeholder="Enter something..."
            onChange={handleOnchange}/>
            {inputValue}    
        </div>
    )
}

export default UseStateHook;
