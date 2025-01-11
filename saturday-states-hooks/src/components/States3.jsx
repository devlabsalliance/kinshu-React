import { useState } from "react";
const States3 = ()=>{
    let [count, setCount] = useState(0);
    let increment = ()=>{
        setCount(count+1);
    }
    let decrement = ()=>{
        setCount(count-1);
    }
    let reset = ()=>{
        setCount(0);
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default States3;