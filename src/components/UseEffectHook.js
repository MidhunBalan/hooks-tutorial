import React,{useEffect, useState} from 'react';
import axios from 'axios';

function UseEffectHook() {
    const [data, setData]= useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response) =>{
            console.log(response.data)
            setData(response.data[0].email);
            console.log("after email get")
        });
        console.log("Hello");
        // return () => {
        //    console.log("use effect return called")   
        // }
    },[]);

    return (
        <div>
            Hello world {data}
        </div>
    )
}

export default UseEffectHook
