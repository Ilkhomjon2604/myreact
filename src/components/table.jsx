import React, { Component } from "react";
import { users } from "./mock";
import './table.css'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: users,
            name: '',
            job: '',
            status: '',
            age: '',
            search: 'id',
            active: null,
            inputName: '',
            inputJob: '',
            inputStatus: '',
            inputAge: '',
        }
    }
    render() {

        // Filter 

        const select = (e) => this.setState({ search: e.target.value })
        const search = (e) =>{
          let res = users.filter((value) => `${value[this.state.search]}`.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
          this.setState({data : res})
        }

        // Delete 

        const onDelete = (id) =>{
            let result = this.state.data.filter(val => val.id !== id)
            this.setState({ data : result })
        }

        // Add 

        const onAdd = () => {
            let user = {
                id : users.length + 1,
                name : this.state.inputName,
                job : this.state.inputJob,
                status : this.state.inputStatus,
                age : this.state.inputAge,
            }
            if(user.name.length && user.status.length && user.job&& user.age.length){
                this.setState ({
                    data : [...users, user],
                    inputName : '',
                    inputJob : '',
                    inputStatus : '',
                    inputAge : '',
                })
            }
           
        }

        const addUser = (e) =>{  this.setState({ [e.target.name] : e.target.value })}

        // Edit 

        const onEdit = ({id, name, job, status, age }, boolean) =>{
            if (boolean){
                let updated = this.state.data.map((value) => value.id === this.state.active?.id ? {...value, name: this.state.name, job: this.state.job, status: this.state.status, age: this.state.age} : value);

                this.setState({
                    data : updated,
                    active : null
                   
                })

            }else
            {
                this.setState({
                    name: name, 
                    status : status,
                    job: job, 
                    age : age,
                    active : {id, name, job, status, age}
                })
            }
            
        }

        const editMode = (e) =>{
            this.setState({
                [e.target.name] : e.target.value
            })
        }



        return (
            <>
                <div className="search">
                    <select onChange={select}>

                        <option value="id">Id</option>
                        <option value="name">Name</option>
                        <option value="job">Job</option>
                        <option value="age">Age</option>

                    </select>
                    <input onChange={search} type="text" placeholder="Type in to search for..."/>
                </div>


                <table>
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
                        { this.state.data.length ?
                        this.state.data.map(({ id, name, job, status, age }) => {

                            return <tr key={id}>

                                <td>{id}</td>
                                <td> 
                                    {this.state.active?.id === id ?
                                     <input name="name" onChange={editMode} value={this.state.name} className="edit-input" type="text" autoComplete="off"/> 
                                     : name} 
                                </td>
                                <td>
                                    {this.state.active?.id === id ? 
                                    <input name="job" onChange={editMode} value={this.state.job} className="edit-input" type="text" autoComplete="off"/> 
                                    : job} 
                                </td>
                                <td>
                                    {this.state.active?.id === id ? 
                                    <input name="status" onChange={editMode} value={this.state.status} className="edit-input" type="text" autoComplete="off"/> 
                                    : status}     
                                </td>
                                <td>
                                    {this.state.active?.id === id ? 
                                    <input name="age" onChange={editMode} value={this.state.age} className="edit-input" type="number" autoComplete="off"/> 
                                    : age} 
                                </td>
                                <td className="action-td">

                                    <button onClick={ ()=> onEdit ({id, name, job, status, age }, this.state.active?.id === id)} >
                                        {this.state.active?.id === id ? 'Save' : 'Edit'}
                                    </button>

                                    <button onClick={ ()=> onDelete (id) }>Delete</button>
                                </td>

                            </tr>
                        }): <tr ><th colSpan={6}  className="no-data">No Data Found</th></tr>}
                    </tbody>
                </table>

                        {/* Adding user inputs  */}
                <div className="input-wrapper">
                    <input onChange={addUser} value={this.state.inputName} name="inputName" type="text" placeholder=" Type in your Name" />
                    <input onChange={addUser} value={this.state.inputJob} name="inputJob" type="text" placeholder=" Type in your Job" />
                    <input onChange={addUser} value={this.state.inputStatus} name="inputStatus" type="text" placeholder=" Type in your Status" />
                    <input onChange={addUser} value={this.state.inputAge} name="inputAge" type="number" placeholder=" Type in your Age" />
                    <button onClick={onAdd}>Add Your User</button>


                </div>
            </>
        )
    }
}

export default Table