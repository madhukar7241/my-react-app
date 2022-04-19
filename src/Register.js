import React from "react";

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'software', employee:'madhu',
            friends: ["omkar", "raju", "venkat", "hareesh","madhukar"],
            employees:[{name:'hareesh',sal:60000},{name:'aravind',sal:40000}]
        };
    }
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <p><h1>{this.state.employee}</h1></p>
                
                <ul>
                    <li>{this.state.friends[0]}</li>
                    <li>{this.state.friends[1]}</li>
                </ul>
                <ol>
                    {
                        this.state.friends.map(function (friend, i) {
                            return <li>{friend}</li>
                        })
                    }
                </ol>
                <ol>
                   
                </ol>
                <table id="customers">
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                    {
                        this.state.employees.map(function(emp,i){
                            return <tr>
                                <td>{i}</td>
                                <td>{emp.name}</td>
                                <td>{emp.sal}</td>
                            </tr>
                        })
                    }
                </table>
                <button onClick={function(){
                    document.getElementById("demo").innerHTML="hello world";
                }}>Click</button>
            </div>
        )
    }
}

export default Register;


/*
onclick or mouseover...etc
*/
