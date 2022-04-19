import react from 'react';
import React from 'react';


class Class extends react.Component
{
    constructor() {
    super();
    };


    render() {
        return(
            <diV><h2>classs Component</h2>
            <p>{this.props.children+' '+this.props.name}</p>
            </diV>
        )
    }
}
export default Class;
