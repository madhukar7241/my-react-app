import React from "react";
import { connect } from "react-redux";
import { getTask } from "../actions/taskActions";

const Tasks =(props)=>{
    console.log(props);
    return <button onClick={props.getTask}click></button>
};
const mapstatetoprops=(state)=>
{
    return state.task;
}
export default connect(mapstatetoprops,{getTask}) (Tasks);

