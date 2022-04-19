
import React, { useState,useRef } from 'react';

const Hooks = () => {
  const [a, setA] = useState("UI");
  const [b,setB] = useState(0);
  const [c,setc] = useState(0);
  const ref1 = useRef();
  const ref2 = useRef();
  const [employee,setC]=useState([{name:"sravan",salary:2000},{name:"kumar",salary:56000}])
  console.log('render');
  const hello=()=>
    {
        
        
        
        ref1.current.style.color="red";
        ref2.current.style.height="200px";
        ref2.current.style.width="200px";
        

    }
    const hello1=()=>
    {
        ref1.current.style.color="green";
        ref2.current.style.height="300px";
        ref2.current.style.width="300px";
    }
   
  return (
    <>
    <center>
  
  
      <h1>Hooks-- - {a}</h1>
      <button  onClick={()=>{setA("JAVA");}}>
        update A
      </button>
      <h3>Cart items:{c}</h3>
      <h2 ref={ref1} onMouseOver={hello} onMouseOut={hello1}>SAMSUNG</h2>
      <img ref={ref2} onMouseOver={hello} onMouseOut={hello1} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCelDWNBmKLFFWeT6jadu1o8Rfg0y5uZ_eDA3aFgkNWz4t6kqeoujcthYHw&s' width="150px"></img><br></br>
      <button onClick= {()=>{setc(c+1);}}>Add to cart</button>
      <button onClick= {()=>{setc(c-1);}}>Remove cart</button>
      
      <h1>count:{b}</h1>
      <button onClick={()=>{setB(b+1);}}>
        update count
      </button><br></br>
      <input type="text"></input><br></br>
      <input type="text"></input>
      <button  onClick={()=>{setC([{name:'rakesh',salary: 200}]);}}>
        ADD
      </button>
      </center>
      
      
      
      <ol>
          {
              employee.map((emp)=> {
                 return <li>{emp.name+' '+emp.salary}</li>
                 
              }
              )}
            
      </ol>
      
    </>
  );
};

export default Hooks;
