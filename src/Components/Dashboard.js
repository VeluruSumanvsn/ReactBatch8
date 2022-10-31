import React from "react";
import First from "./First";

class Dashboard extends React.Component {
    state={
        name: "Suman",
        salary:123456
    }
    render(){
        return(
            <div>
               <First details={this.state.name}/>
            </div>
        )
    }
}
export default Dashboard