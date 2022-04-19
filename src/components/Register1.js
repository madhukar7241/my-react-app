
import React,{ useState,useRef } from "react";
import { Button,Form,Col,Row,Label } from "react-bootstrap";



 import Axios from 'axios';
 function Register1()
 {   const url="  http://localhost:5000/posts"
     const [data,newdata]=useState({id:"",name:"",mobileno:"",emailid:"",twitterusername:"",dropdown:"",Gender:"",checkbox:""});
     const ref1= useRef();
     
     function submit(e) {
      
        Axios.post (url,{
             id:data.id,
             name:data.name,
             mobileno:data.mobileno,
             emailid:data.emailid,
             twitterusername:data.twitterusername,
             dropdown:data.dropdown,
             Gender:data.Gender,

             checkbox:data.checkbox

         })
        

     }
     
     
    function changetext(e) {
        e.preventDefault();
       
        const setdata={...data}
        setdata[e.target.id]=e.target.value
        newdata(setdata)
      
        
      }
      function handlechange(e) {
        e.preventDefault();
       
        const setdata={...data}
        setdata[e.target.name]=e.target.value
        newdata(setdata)
        
        
      }
    
      
     return(
         <center>
         <h1 ref={ref1} style={{ color: 'red' }} >Signup form</h1>
         <label>ENTER YOUR FIRSTNAME:<input type="text" onChange={(e)=>changetext(e)} id="id"></input></label><br></br>
         <label>ENTER YOUR NAME:<input type="text" onChange={(e)=>changetext(e)} id="name"></input></label><br></br>
        <label>ENTER YOUR MOBILE NO:<input type="text" onChange={(e)=>changetext(e)} id="mobileno"></input></label><br></br>
        <label>ENTER YOUR EMAILID:<input text="text" onChange={(e)=>changetext(e)} id="emailid"></input></label><br></br>
        <label>ENTER YOUR TWITTERID:<input text="text" onChange={(e)=>changetext(e)} id="twitterusername"></input></label><br></br>
        <label for="cars">Choose a course:</label>
      <select onChange={(e)=>changetext(e)} id="dropdown" value={data.dropdown}>
    <option>Reactjs</option>
    <option>ui developer</option>
    <option>html</option>
    <option>CSS</option>
  </select>
  <br></br>
  <label>Choose Gender:</label>
     
       <input type="radio"  name="Gender" value="male" onChange={(e)=>handlechange(e)}/>
        <label for="html">MALE</label>
         <input type="radio"  name="Gender" value="female" onChange={(e)=>handlechange(e)}/>
        <label for="css">FEMALE</label><br/>
      

  
     <label>select checkbox:</label>
      <input type="checkbox"  name="checkbox" value="I have a bike" onChange={(e)=>handlechange(e)} />
     <label for="checkbox"> I have a bike</label>
     <input type="checkbox" name="checkbox" value="I have a car" onChange={(e)=>handlechange(e)}/>
     <label for="checkbox"> I have a car</label>
     <input type="checkbox" name="checkbox" value="I have a boat" onChange={(e)=>handlechange(e)}/>
     <label for="checkbox"> I have a boat</label><br></br>
      
        
        <Button onClick={submit} variant="primary">Signup</Button>
        <Button  variant="primary">Cancel</Button>

        
         </center>
     )
 }
 export default Register1;