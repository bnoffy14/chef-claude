import { useState } from "react";
import Count from "./Count";

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

    const styles = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        gap: "16px"
    }

    return (
        <div style={styles}>
            <button onClick={subtract}>-</button>
            {/* <h2>{count}</h2> */}
            <Count number = {count}/>
            <button onClick={add}>+</button>
            
            
            {/* <button onClick={}>-</button> */}
            {/* <button onClick={handleClick}>{label}</button> */}
        </div>
    );
}