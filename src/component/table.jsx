import React, {Component} from "react";
import { users } from "./mock";
import './table.css'

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : users,
            name : '',
            job : '',
            status : '',
            age : '',
            search: 'id'
        }
    }
    render(){



        const onDelete = (id) =>{
         let res = this.state.data.filter(val => val.id !== id)
         this.setState({
            data: res
         });
}
        //  const onFilter = (e) => {
        //     let result = users.filter(val => val.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||  val.job.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||  val.status.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        //     this.setState({
        //         data : result
        //     })
        //  }
         const onFilter = (e) => {
            let result = users.filter(val => `${val[this.state.search]}`.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) )
            this.setState({
                data : result
            })
         };

         const onOption =(e)=>{
            
            this.setState({
                search : e.target.value
            })
            console.log(this.state.search);
         }

        const creatObj = (e)=>{
            this.setState({   [e.target.name] : e.target.value
            })
            
        }


         const onAdd = () =>{

            let newUser = {
                id : users.length + 1,
                name : this.state.name,
                job: this.state.job,
                status: this.state.status,
                age : this.state.age
            }
            if(newUser.name.length && newUser.job.length && newUser.status.length){
                this.setState({
                    data : [...this.state.data, newUser],
                    name : '',
                    job: '',
                    status: '',
                    age: ''
                })
            }
         
         }
         
     
        return(

            <>
            <div className="search-wrap">

                <select onChange={onOption} >
                    <option value="id">ID</option>
                    <option value="name">Name</option>
                    <option value="job">Job</option>
                    <option value="status">Status</option>
                    <option value="age">Age</option>
                </select>

            <input  className="search" type="text" name="filter"  placeholder="type to search ..." onChange={onFilter} />
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
                                <td >{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.job}</td>
                                <td>{value.status}</td>
                                <td>{value.age}</td>
                                <td><button onClick={()=>onDelete(value.id)}>Delete</button> <button onClick={onAdd}>Edit</button></td>
                            </tr>
                            )
                            
                            
                            
                        }): <tr > <th colSpan={6}>No Data Found</th></tr>}
            
                </tbody>
            </table>
            
            <div className="input-wrapper">

                <input value={this.state.name} autoComplete="off" type="text" placeholder="Type in Your name..." name="name" onChange={creatObj}/>
                <input value={this.state.job} autoComplete="off" type="text" placeholder="Type your occupation..." name="job" onChange={creatObj}/>
                <input value={this.state.status} autoComplete="off" type="text" placeholder="Type your Status..." name="status" onChange={creatObj}/>
                <input value={this.state.age} autoComplete="off" type="number" placeholder="What is your age..." name="age" onChange={creatObj}/>
                <button type="submit" onClick={onAdd}>Add</button>
                
            </div>
            </>
        )
    }
}

export default Table