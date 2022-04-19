import React, {useState,useEffect,useRef} from "react";



const Willmount=()=> {
    const[name,data]=useState('');
    const[name1,data1]=useState(630000);
    const[name2,data2]=useState(true);
    const [count,setCount]=useState(0);
    const hello = useRef();
    useEffect(function() {
        console.log("component will mount1");
    });
    const render = ()=>
    {
        hello.current.style.backgroundColor="yellow";
    }
   
    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      });
    

    return(
        <div >
            <center>
            

        <h2>Data is {name}</h2>
        <h2>Data is {name1}</h2>
        
        <h2 ref={hello}>I have rendred:{count}</h2>
        <button class="button" onClick={ ()=>{ data('MADHUKAR');
    }}>click</button>
    <button class="button" onClick={render}>RENDER CHANGE</button>
     <button class="button" onClick={ ()=>{ data1(name1+1);
    }}>click1</button>
    </center>
    
    

    </div>
    
    )

    
}
export default Willmount;