import React,{useRef, useEffect, useLayoutEffect} from 'react'

function UseLayoutEffectHook() {

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        inputRef.current.value = "useLayoutEffect value";
        console.log('useLayoutEffect fired')
    },[])
    useEffect(() => {
        inputRef.current.value = "useEffect value"
        console.log('useEffect fired')
    }, [])

    return (
        <div>
           <input value="Midhun" ref={inputRef} readOnly/> 
        </div>
    )
}

export default UseLayoutEffectHook;
