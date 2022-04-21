
import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button,Form,Col,Row,Label } from "react-bootstrap";
import Axios from 'axios';

const User =()=> {
    const param = useParams();
    const [user,datauser]=useState({});
    const [data,Setdata]=useState({id:"",name:"",mobileno:"",emailid:"",twitterusername:"",dropdown:"",Gender:"",checkbox:""});
    useEffect(()=>
    {
        fetch(" http://localhost:5000/posts/"+param.datas)
        .then(res=>res.json())
        .then((json)=>datauser(json));    
        console.log(param.datas);
    },[]);

     function deleteContact() { 
        Axios.delete(" http://localhost:5000/posts/"+param.datas)
        //.then(res=>res.json())
        .then((json)=>datauser(json));
        alert("Are you want to sure delete:"+param.datas);
     }
     function handlechange(e) {
        e.preventDefault();
       
        const setdata={...user}
        setdata[e.target.id]=e.target.value
        datauser(setdata)
        console.log(e.target.id)
        
        
      }
    
     
     function updatechange(e) {
        e.preventDefault();
        Axios.patch(" http://localhost:5000/posts/"+param.datas)
        //.then(res=>res.json())
        .then((json)=>datauser(json));
        alert("Are you want to sure update:"+param.datas);
        console.log("data is"+data)
        
        
      }
      function updatedatadisplay() {
          alert('hello')
         
        
      }
    
    return (
        <>
        
        <table id="customers">
       
       <tr>

           <th>NAME</th>
         <th>User Name</th>
         <th>Image</th>
         <th>Mobileno</th>
         <th>Emailid</th>
         <th>twitter_username</th>
         <th>Course</th>
         <th>Gender</th>
         <th>check Item</th>
         <th>Operation</th>
        
       </tr>
       <tr> 
       <td>{user.id}</td>
       <td>{user.name}</td>
       <td> <img src={user.avatar_url} width="200"></img></td>
       <td>{user.mobileno}</td>
       <td>{user.emailid}</td>
       <td>{user.twitterusername}</td>
       <td>{user.dropdown}</td>
       <td>{user.Gender}</td>
       <td>{user.checkbox}</td>
       <Button variant="primary" onClick={updatedatadisplay}>Update</Button>
       <Button variant="danger" onClick={deleteContact}><Link to={`/Home`}>Delete</Link></Button>
        </tr>
       </table>
       <br/>
       <Button variant="warning"><Link to={`/Home`}>Back</Link></Button><br/>
    
       <div class="container">
    
    <Form.Label htmlFor="inputPassword">Username</Form.Label>
   <Form.Control
 type="text" onChange={(e)=>handlechange(e)} id="name" placeholder={user.name}
 
 aria-describedby="passwordHelpBlock"/>
 <Form.Label htmlFor="inputPassword5">Mobileno</Form.Label>
   <Form.Control
 type="number" onChange={(e)=>handlechange(e)} id="mobileno" placeholder={user.mobileno}

 aria-describedby="passwordHelpBlock"/>
 <Form.Label htmlFor="inputPassword5">Emailid</Form.Label>
   <Form.Control
 type="text" onChange={(e)=>handlechange(e)} id="emailid" placeholder={user.emailid}
 
 aria-describedby="passwordHelpBlock"/>
 <Form.Label htmlFor="inputPassword5">Twitter_username</Form.Label>
   <Form.Control
 type="text" onChange={(e)=>handlechange(e)} id="twitterusername" placeholder={user.twitterusername}
 
 aria-describedby="passwordHelpBlock"/><br/>
 <center>
 
 <Button variant="warning" onClick={updatechange}>Update</Button>{' '}
<Button variant="warning">Cancel</Button>{' '}
 </center>
 </div>
        </>

    )
}
export default User;