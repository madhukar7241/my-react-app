import React,{useState,useEffect,useRef} from "react";


 function Task1() {

     const[post,stats]=useState([])
     const[name,updateid]=useState('')
     const ref1= useRef();
    
    
    // useEffect(()=> {
        
    // }, [name])
    
const callMe = ()=>{
    fetch(` https://api.github.com/users/${ref1.current.value}`)
        .then(response=>{
            console.log(response)
            return response.json()
            
        })
        .then((json)=>{

            stats(json)
            console.log(json.login)
        })
        
}

        return(
            <>
           {/* ENTER NAME<input type="text" ref={ref1}  onChange={e=>updateid(e.target.value)}></input> */}
           ENTER NAME<input type="text" ref={ref1}  />
           <div>{post.followers_url}</div>
           <div>{post.login}</div>
           <div>{post.html_url}</div>
           <div>{post.subscriptions_url}</div>
           <div>{post.organizations_url}</div>
           <button onClick={callMe}>submit</button>
            
                  
           <table>
               <tr>
               <th>followers_url</th>
               <th>Login</th>
               <th>html_url</th>
               <th>subscriptions_url</th>
               <th>organizations_url</th> 
               </tr>
               <tr>
              <td>{post.login}</td>
               </tr>
               </table> 
                       
               <>
 
</>
           
        
            </>
        )
    
}
export default Task1;