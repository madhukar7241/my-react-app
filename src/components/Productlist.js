import React from "react";
import { useParams } from "react-router-dom";

const Productlist=(props)=>
{
    const param = useParams();
    console.log(props.data);
    return (
        <>
        <h1>Productlist</h1>
        <p>{param.name}</p>
       <p> Hyderabad - Search For Relevant Info & Results. Get Results from Multiple Engines. Get Results for Content Writing Services Usa. Find Quick Results from Multiple Sources. Discover us now! Easy Acces To Information. Simple in use.</p>
        <h1>250000</h1>
        
        <p>{param.price}</p>
        <p><img src={param.img}></img></p>
       
        </>
    )
}
export default Productlist;
