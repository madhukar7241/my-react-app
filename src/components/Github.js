import React from "react";


class Github extends React.Component
{
    constructor(){
        super();
        this.state = {
            users:[],
        };
    }
    componentDidMount() {
        fetch('https://api.github.com/users/mojombo')
        .then(response=>{
            console.log(response)
            return response.json()
            
        })
        .then((json)=>{
            this.setState({users:json})
            console.log(json)
        })
        
    }

    render() {
        return(
            <>
            <ul>
                {
                    this.state.users.map((name)=> {
                        return ( 
                           <>
                         <li>{name.login}</li>
                         
                        <img src={name.avatar_url} width="100px"/>
                        <li>{name.url}</li>
                        <li>{name.followers_url}</li>
                        
                         </>
                        )
                    })
                }
            </ul>
            </>
        );
    }
}
export default Github;