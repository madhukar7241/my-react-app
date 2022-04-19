import React from "react";


const functional =(props)=> {

    console.log(props)
    return (
        <div>
            <h2>Functional Component</h2>
            <p>{props.children+' '+props.name+props.age}</p>
        </div>
    )
};
export default functional;