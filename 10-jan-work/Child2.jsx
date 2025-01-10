const Child2 = (props)=>{
    return(
        <div>
            <h3>Here we get data from parent component which is in the form of Object</h3>
            <p>{props.data.name}</p>
            <p>{props.data.email}</p>
        </div>
    )
}
export default Child2;