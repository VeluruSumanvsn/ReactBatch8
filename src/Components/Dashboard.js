import React from "react";
import {Link} from 'react-router-dom';
class Dashboard extends React.Component {
    state={
        name: "Kohli",
        salary: 123456,
        age:30
    }
    render(){
        const{name, salary, age} = this.state;
        return(
            <div>
               <h1>This is Dashboard</h1>
               <h1>{name}</h1>
               <h1>{salary}</h1>
               <h1>{age}</h1>
               <Link to='/'>Home</Link>
            </div>
        )
    }
}
export default Dashboard;