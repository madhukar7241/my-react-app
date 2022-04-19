import React from "react";


const Product=(props)=> {
    console.log(props);

    const{data,cond}=props;

    

return(

    <>
    {cond =='item' && (
        <h2>
        {data.name}
        {data.price}
        </h2>
    )}
    {cond =='employee' && ( <option>{data}</option>)}
        
        
        
    </>
);

    
};
export default Product;
