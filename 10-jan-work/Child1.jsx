const Child1 = (data)=>{
    return(
        <div>
            <p>Here data will be received from parent component
                which is array type to child component
            </p>
            <h4>{data.data[0]}</h4>
            <h4>{data.data[1]}</h4>
            <h4>{data.data[2]}</h4>
        </div>
    )
}
export default Child1;