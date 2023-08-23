import React, {Component} from "react";
import { users } from "./mock";

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : users,
            
        }
    }
    render(){



        return(
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Status</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {this.state.data.map((value) =>{
                            return (
                                <tr>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.job}</td>
                                <td>{value.status}</td>
                                <td>{value.age}</td>
                            </tr>
                            )
                            
                            
                            
                        })}
            
                </tbody>
            </table>
        )
    }
}

export default Table