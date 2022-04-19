import React from "react";
import react from 'react';
import Lifecycle from "./components/Lifecycle";
import Table from "./components/Table";

class App extends React.Component {
constructor() {
  super();
  this.state={
    name:'',
    salary:'',
    designation:'',
    employee:[{name:"madhukar",salary:250000,designation:"developer"},
               {name:"kumar",salary:30000,designation:"Tester"},
              {name:"raju",salary:450000,designation:"designer"},],
              
  };
}

formSubmitted = (e) => {
  
  this.setState({
    employee: [
      ...this.state.employee,
      { name: this.state.name, salary: this.state.salary,designation:this.state.designation },
    ],
    name:'',
    salary:'',
    designation:'',
    
  });
};

  changetext=(e)=> {
    console.log(e.target.name);
    this.setState({[e.target.name]:e.target.value})
  }
  


render()
{
  const {name,salary,designation,employee}=this.state;
  return(
    <div>
      <label>ENTER A NAME:</label><input type="text" onChange={this.changetext} name="name" value={this.state.name}></input><br></br>
      <label>ENTER A SALARY:</label><input type="text" onChange={this.changetext} name="salary" value={this.state.salary} ></input><br></br>
      <label>ENTER A DESIGNATION:</label><input type="text" onChange={this.changetext} name="designation" value={this.state.designation}></input><br></br>
      <button onClick={this.formSubmitted}>ADD</button>
     <table border="1">
       
         <tr>
           <th>NAME</th>
           <th>SALARY</th>
           <th>DESIGNATION</th>
          
         </tr>
         {
           
           employee.map((emp)=>
           {
             return <Table data={emp}/>
           })
          }
          
        
         
         
         
         </table>
       
     
    
    </div>
    
  )
}

}
  export default App;