import React, {Component} from "react";
import { users } from "./mock";
import './table.css'

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : users,
            
        }
    }
    render(){
        const onDelete = (id) =>{
         const res = this.state.data.filter(val => val.id !== id)
         this.setState({
            data: res
         })
        }
        return(

            <>
            <div className="search-wrap">
            <input className="search" type="text" name="filter" placeholder="type to search ..." />
            </div>
           

            <table border={1} >

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Status</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        
                        {this.state.data.length ?
                        this.state.data.map((value, i) =>{
                            return (
                                <tr key={value.id}>
                                <td >{i + 1}</td>
                                <td>{value.name}</td>
                                <td>{value.job}</td>
                                <td>{value.status}</td>
                                <td>{value.age}</td>
                                <td><button onClick={()=>onDelete(value.id)}>Delete</button> <button>Edit</button></td>
                            </tr>
                            )
                            
                            
                            
                        }): <tr > <th colSpan={6}>No Data Found</th></tr>}
            
                </tbody>
            </table>

            </>
        )
    }
}

export default Table