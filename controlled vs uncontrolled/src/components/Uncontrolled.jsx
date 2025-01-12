import { useRef, useState } from "react"

const Uncontrolled = ()=>{

    let number1 = useRef();
    let number2 = useRef();

    let [result, setResult] = useState(0);

    let add = ()=>{
        let a = (Number)(number1.current.value);
        let b = (Number)(number2.current.value);
        setResult(a+b);
    }
    let sub =()=>{
        let a = (number1.current.value);
        let b = (number2.current.value);
        setResult(a-b);
    }
    let mul =()=>{
        let a = number1.current.value;
        let b = number2.current.value;
        setResult(a*b);
    }
    let div =()=>{
        let a = number1.current.value;
        let b = number2.current.value;
        setResult(a/b);
    }
    return(
        <div>
            <label htmlFor="">Enter a number : </label>
            <input type="text" ref={number1} />
            <br />
            <label htmlFor="">Enter another number : </label>
            <input type="text" ref={number2}/>
            <br />
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={mul}>*</button>
            <button onClick={div}>/</button>
            
            <h1>{result}</h1>
        </div>
    )
}
export default Uncontrolled;