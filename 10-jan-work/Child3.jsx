const Child3 = (props)=>{
    return(
        <div>
            <h3>Here we get data from parent component which is array of object</h3>
            <p>{props.data[0].name +" "+ props.data[0].bio}</p>
            <p>{props.data[1].name+" "+props.data[1].bio}</p>
        </div>
    )
}
export default Child3;