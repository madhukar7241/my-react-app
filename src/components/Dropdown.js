import React from "react";
import react from 'react';

class Dropdown extends React.Component 
{
    constructor() {
    super();
    this.state= {
        item:[{name:"pizza",price:"15"},{name:"burger",price:"20"}]};
    }


    render() {
        return (
            <div>
                {
                    this.state.item.map(function (emp,i){
                    return <div>
                        <label>name:{emp.name}</label><br></br>
                        <label>price:{emp.price}</label>

                </div>
                    
                    })
                }
        
                
        
    
            </div>
        )
    }
}
export default Dropdown;