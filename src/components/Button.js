import React,{forwardRef,useImperativeHandle ,useState} from 'react'

const Button = forwardRef((props, ref)=> {
    const [toggle, setToggle] = useState(false)
    useImperativeHandle(ref, () =>({
        updateToggle(){
            setToggle(!toggle)
        }
    }));
    return (
        <div>
            <button>
            Button from child
            </button> <br/>
            {toggle && <span>Toggle</span>}
        </div>
    )
});

export default Button
