import React from "react";


class Lifecycle extends React.Component {
    constructor() {
        super();
        this.state ={
            p:"madhukar",
        };
        console.log("lifecycle constructor");
    }

    render() {
        console.log("lifecycle render");
        return(
            <div>
            <h1>Life cycle methods--{this.state.p}</h1>
            <button onClick={()=>this.setState({p:"MADHU"})}>Click</button>
            </div> 
        )
    }
}
export default Lifecycle;