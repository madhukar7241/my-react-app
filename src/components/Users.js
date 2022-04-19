import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Users =()=>
{
    const[user,setuser]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/posts")
        .then(res=>res.json())
        .then((json) => setuser(json));
    },[]);


    return (
        <>
        <h1>student details</h1>
        <ul>
            {
                user.map((emp)=>
                {
                    return (
                        
                        <li>
                          <Link to={`/${emp.id}`}>{emp.id}</Link>
                            </li>
                            
                    )
                })
            }
        </ul>
       
        </>
    )
}
export default Users;
