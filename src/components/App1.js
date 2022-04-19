import React from "react";
import { connect } from "react-redux";
 function App1(props) 
 {
     return (
         <>
         <h1>Hello world</h1>
         <h1>{props.a}</h1>
         <h1>{props.b}</h1>
         <button onClick={props.increment}>increment</button>
         <button onClick={props.decrement}>decrement</button>
         </>
     )
 }
  const mapstore =(state)=>
  {
      return state;
  }
  const mapdispathtoprops =(dispatch)=>
  {
      return {
          increment:()=>
          {
              return dispatch({type:'INC',value:30})
          },
          decrement:()=>
          {
              return dispatch({type:'DEC',value:50})
          },
      }
  }
 
export default connect (mapstore,mapdispathtoprops)(App1);
