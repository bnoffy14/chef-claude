import { useState } from "react";

export default function Counting() {
    

    const [count, setCount] = useState(0);
    function add(){
        console.log("add");
        setCount(prevCount => prevCount + 1);
        console.log(count);

    }

    function subtract(){
        setCount(prevCount => prevCount - 1);  
    }

    return (
        <>
            <button onClick={subtract}>-</button>
            {count}
            <button onClick={add}>+</button>
            
            
            {/* <button onClick={}>-</button> */}
            {/* <button onClick={handleClick}>{label}</button> */}
        </>
    );
}