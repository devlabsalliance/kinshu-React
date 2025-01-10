import React from "react";
import Child from "./components/Child";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";
const App = ()=>{
    let obj = {name:"Miller",email:"miller@gmail.com"}
    let arr = [{name:"Martin",bio:"Martin is one of the action movie"},
        {name:"Alex",bio:"He is a Australian cricketer"}
    ]
    return(
        <div>
            <h1>Hello</h1>
            <Child data="kinshu"/>
            <Child1 data={["HTML","CSS","JS"]}/>
            <Child2 data={obj}/>
            <Child3 data={arr} />
        </div>
    )
}
export default App;