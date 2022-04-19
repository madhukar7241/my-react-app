import React from "react";


const Table =(props)=>
{
    console.log(props.data)
    

  return (
    <>
        
         <tr> 
       
       <td>{props.data.name}</td>
       <td>{props.data.salary}</td>
       <td>{props.data.designation}</td>
       <td><img src={props.data.img} height="30px" width="40px"/></td>
        </tr>
        
        
    </>
 )
};
export default Table;