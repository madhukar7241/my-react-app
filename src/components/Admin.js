import React from "react";
import {Button, Form,FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Admin=()=> {

    return(
        <>
             <div class="row">
        
       
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
        <h1 className="admin" style={{ color: 'red' }}>Admin Login</h1>
        <Form.Floating className="mb-3">
        
    <Form.Control
      id="floatingInputCustom"
      type="email"
      placeholder="name@example.com"
    />
    <label htmlFor="floatingInputCustom">Email address</label>
  </Form.Floating>
  <Form.Floating>
    <Form.Control
      id="floatingPasswordCustom"
      type="password"
      placeholder="Password"
    />
    <label htmlFor="floatingPasswordCustom">Password</label>
  </Form.Floating>
  <br/>
  <div className="admin">
  <Button variant="success"><Link to={`/Register`}>Login</Link></Button>{' '}
  <Button variant="warning">Cancel</Button>{' '}
  </div>
  </div>
  <div className="col-md-4">
      
  </div>
  </div>
        </>
    )
};
export default Admin;