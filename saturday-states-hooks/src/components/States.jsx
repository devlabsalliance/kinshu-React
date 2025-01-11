// below code is how we can pass a string inside states
import { useState } from "react";
const States = ()=>{
    let [data,setData] = useState("hungry");
    let eat = ()=>{
        setData("My Stomach is full");
    }
    return(
        <div>
            <h3>{data}</h3>
            <button onClick={eat}>Food</button>
        </div>
    )
}
export default States;