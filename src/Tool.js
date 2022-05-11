import React,{useState} from 'react'
const Tool=()=>{
    const [a,b]=useState(0)


return(
    <>
    <p>{a} </p>
    <button onClick={()=>b(a+1)}>Click</button>
    <button onClick={()=>b(a-1)}>Click</button>

    </>
)

}
export default Tool;