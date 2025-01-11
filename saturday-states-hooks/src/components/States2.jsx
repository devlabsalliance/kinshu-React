import { useState } from "react";
const States2 = ()=>{
    let [data, setData] = useState({name:"kinshu",email:"kinshu@gmail.com"});
    let change = ()=>{
        setData({name:"anshu",email:"anshu@gmail.com"});
    }
    return(
        <div>
            <h3>{data.name+" "+data.email}</h3>
            <button onClick={change}>Click Me</button>
        </div>
    )
}
export default States2;