// below code how can we pass react inside state and change its value
import { useState } from "react"
const States1 = ()=>{
    let [data, setData] = useState(["HTML","CSS","JS"]);
    let change = ()=>{
        setData(["Frontend","backed","database"]);
    }
    return(
        <div>
            <h3>{data[0]}</h3>
            <h3>{data[1]}</h3>
            <h3>{data[2]}</h3>
            <button onClick={change}>Change</button>
        </div>
    )
}
export default States1;