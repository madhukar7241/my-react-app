import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import react from 'react';
import Lifecycle from "./components/Lifecycle";
import Hooks from "./components/Hooks";
import Willmount from "./components/Willmount";
import Dropdown from "./components/Dropdown";
import Functiontable from "./components/Functiontable";
//import Github from "./components/Github";
//import Task1 from "./components/Task1";
import { Link,Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Product from "./components/Product";
import Productlist from "./components/Productlist";
import Task1 from "./components/Task1";
import Users from "./components/Users";
import User from "./components/User";
import {connect} from 'react-redux';
import Reducer from "./components/Reducer";
import Register1 from "./components/Register1";
//import mystore from './store';
import {Provider} from 'react-redux';
import Tasks from "./components1/Tasks";
import Admin from "./components/Admin";




function App() 
{
  return(
    <>
    
    <div className="topnav">
    <Link to="/">Login</Link>
    <Link to="/Home">Home</Link>
    <Link to="/Register">Register</Link>
    
    <Link to ="/homes">willmount</Link>
    <Link to ="/Task">Task</Link>
    <Link to ="/About">Hooks</Link>
    <Link to ="/contactus">Lifecycle</Link>
    <Link to ="/contactus1">Dropdown</Link>
    <Link to ="/Functionaltable">Functionaltable</Link>
    <Link to ="/product">Product</Link>
    <Link to ="/Redux">Redux</Link>
    </div>
    <h1><marquee direction="right" style={{ color: 'blue' }} >Hello users</marquee></h1>
    
    <Routes>
    <Route path="/Register" element={<Register1/>}/>
      <Route path="/homes" element={<Willmount/>}/>
      <Route path="/About" element={<Hooks/>}/>
      <Route path="/Contactus" element={<Lifecycle/>}/>
      <Route path="/Contactus1" element={<Dropdown/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/product/:name" element={<Productlist/>}/>
       <Route path="/Task" element={<Task1/>}/>
       <Route path="/Functionaltable" element={<Functiontable/>}/>
      <Route path="/Home" element={<Users/>}/>
       <Route path="/:datas" element={<User/>}/>
       <Route path="/Redux" element={<Reducer/>}/>
       <Route path="/" element={<Admin/>}/>
    
    </Routes>
    
    
    </>
  )

 }
export default App;