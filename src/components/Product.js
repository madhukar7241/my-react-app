import React from "react";
import {Link} from "react-router-dom";


class Product extends React.Component
{
    constructor() {
        super();
    
    this.state ={ 
        
        products:[{name:"samsung",price:2000,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-F9S_5X5K-FlwBAJNrdUcB5i59jRWV8dGkqy7R98aH_Xj-SwN1WeQlrL&s'},
    {name:"redmi",price:45000},
    {name:"oppo",price:89000},

    ],}
  }


 render() {
    return(
        <>
        <ul>
        {
                   this.state.products.map(function(pro,i)
                   {
                       return <div>
                           
                           
                         <Link to ={`/product/${pro.name}`}>{pro.name}</Link>
                         
                       </div>
                       
                   })
                }
        </ul>
        </>
    )
  }


}
export default Product;