import { useState } from "react";
const Controlled = ()=>{

    let [number1, setNumber1] = useState(0);
    let [number2, setNumber2] = useState(0);
    let [result, setResult] = useState(0);

    let add = ()=>{
        setResult(Number(number1) + Number(number2));
    }
    let sub = ()=>{
        setResult(number1 - number2);
    }
    let mul = ()=>{
        setResult(number1 * number2);
    }
    let div = ()=>{
        setResult(number1 / number2);
    }

    let update1 = (number)=>{
        setNumber1(number.target.value);
    }

    let update2 = (number)=>{
        setNumber2(number.target.value);
    }

    return(
        <div>
            <label htmlFor="">Enter a number : </label>
            <input type="text" value={number1} onChange={update1} />
            <br />
            <label htmlFor="">Enter another number</label>
            <input type="text" value={number2} onChange={update2} />
            <br />
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={mul}>*</button>
            <button onClick={div}>/</button>
            <br />
            <h1>{result}</h1>
        </div>
    )
}
export default Controlled;