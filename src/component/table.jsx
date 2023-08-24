import React, {Component} from "react";
import { users } from "./mock";
import './table.css'
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : users,
            name : '',
            job : '',
            status : '',
            age : '',
            search: 'id',
            active: null,
        }
    }
    render(){

        const onChange = (event) =>{
            this.setState({ [event.target.name] : event.target.value})
        }
        // delete elemnt from table 

        const onDelete = (id) =>{
         let res = this.state.data.filter(val => val.id !== id)
         this.setState({
            data: res
         });
}

        // Filter by option and all together

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

        //  search option 
         const onOption =(e)=>{  this.setState({search : e.target.value})     }

        //  creating element in object 
         const creatObj = (e)=>{ this.setState({   [e.target.name] : e.target.value }) }

        //  adding element to the table 
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

        //  Editing element in the table

        const onEdit = ({id, name, job, status, age}, isSave) =>{
            if(isSave){
                let res = this.state.data.map((value) =>
                value.id === this.state.active.id  ? { ...value, name: this.state.name, status: this.state.status, age: this.state.age }
                : value)

                this.setState({ active: null, data: res });
            }else{
                this.setState({
                    name: name,
                    job: job,
                    status: status,
                    age: age,

                    active: { id, name, status },
                  });
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
                        this.state.data.map(({id, name, job, status, age}) =>{
                            return (
                                <tr key={id}>
                                <td >{id}</td>
                                <td>{
                                this.state.active?.id === id ? <input onChange={onChange} name="name" className="on-edit" value={this.state.name} type="text" /> : name
                                }</td>
                                <td>{
                                  this.state.active?.id === id ? <input onChange={onChange} name="job" className="on-edit" value={this.state.job} type="text" /> : job}</td>
                                <td>{
                                  this.state.active?.id === id ? <input onChange={onChange} name="status" className="on-edit" value={this.state.status} type="text" /> : status}</td>
                                <td>{
                                  this.state.active?.id === id ? <input onChange={onChange} name="age" className="on-edit" value={this.state.age} type="number" /> : age}</td>
                                <td>
                                    <button onClick={()=>onDelete(id)}>Delete</button>
                                    <button onClick={() => onEdit({id, name, job, status, age}, this.state.active?.id === id)}> {this.state.active?.id === id ? 'Save' : 'Edit'}</button>
                                </td>
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