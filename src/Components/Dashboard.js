import React from "react";
// import First from "./First";
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
               <h1>{name}</h1>
               <h1>{salary}</h1>
               <h1>{age}</h1>
            </div>
        )
    }
}
export default Dashboard;