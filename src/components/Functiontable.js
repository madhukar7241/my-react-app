import React from "react";
import react from 'react';
import Table from "./Table";


class Functiontable extends React.Component {
constructor() {
  super();
  this.state={
    name:'',
    salary:'',
    designation:'',
    img:'',
    employee:[{name:"madhukar",salary:250000,designation:"developer",img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-F9S_5X5K-FlwBAJNrdUcB5i59jRWV8dGkqy7R98aH_Xj-SwN1WeQlrL&s'},
               {name:"kumar",salary:30000,designation:"Tester",img :'.../components/image.jpg'},
              {name:"raju",salary:450000,designation:"designer",img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-F9S_5X5K-FlwBAJNrdUcB5i59jRWV8dGkqy7R98aH_Xj-SwN1WeQlrL&s'},],
              
  };
}

formSubmitted = (e) => {
  
  this.setState({
    employee: [
      ...this.state.employee,
      { name: this.state.name, salary: this.state.salary,designation:this.state.designation,img:this.state.img },
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
      <label>SELECT IMAGE:</label><input type="file"  onChange={this.changetext} name="img" value={this.state.img}  ></input><br></br>
      <button onClick={this.formSubmitted}>ADD</button>
     <table border="1">
       
         <tr>
           
           <th>NAME</th>
           <th>SALARY</th>
           <th>DESIGNATION</th>
           <th>IMAGE</th>
          
         </tr>
         {
           
           employee.map((emp,eno)=>
           {
             return <Table data={emp}/>
              
           })
           

          }
         </table>
    
    </div>
    
  )
}

}
  export default Functiontable;