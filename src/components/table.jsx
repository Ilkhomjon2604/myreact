import React, { useState } from "react";
import { users } from "./mock";
import './table.css'


//         // Edit 

//         const onEdit = ({id, name, job, status, age }, boolean) =>{
//             if (boolean){
//                 let updated = this.state.data.map((value) => value.id === this.state.active?.id ? {...value, name: this.state.name, job: this.state.job, status: this.state.status, age: this.state.age} : value);

//                 this.setState({
//                     data : updated,
//                     active : null
                   
//                 })

//             }else
//             {
//                 this.setState({
//                     name: name, 
//                     status : status,
//                     job: job, 
//                     age : age,
//                     active : {id, name, job, status, age}
//                 })
//             }
            
//         }

//         const editMode = (e) =>{
//             this.setState({
//                 [e.target.name] : e.target.value
//             })
//         }


function Table()  {
   
    const [data, setData] = useState(users);
    const [search, setSearch] = useState('');
    const [userName, setUserName] = useState('');
    const [userJob, setUserJob] = useState('');
    const [userStatus, setUserStatus] = useState('');
    const [userAge, setUserAge] = useState('');
    const [active, setActive] = useState(null);
    const [nameE, setName] = useState('');
    const [jobE, setJob] = useState('');
    const [statusE, setStatus] = useState('');
    const [ageE, setAge] = useState('');




// Filter 
   const select = (e) => setSearch( e.target.value )
   const lookUp = (e) =>{
     let res = users.filter((value) => `${value[search]}`.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
     setData(res)
   }

// Delete 
    const onDelete = (id) =>{
    let result = data.filter(val => val.id !== id)
    setData(result)}

// Add
    const onAdd = () => {
        let user = {
            id : users.length + 1,
            name : userName,
            job : userJob,
            status : userStatus,
            age : userAge 
        };

            if(user.name.length && user.status.length && user.job&& user.age.length){
                setData ( [...users, user]);
                setUserName('');
                setUserStatus('');
                setUserAge('');
                setUserJob('');
            };
        }
      
// Update 

const onEdit = ({id, name, job, status, age }, boolean) =>{
        if (boolean){
            let updated = data.map((value) => value.id === active?.id ? 
            {...value, name: nameE, job: jobE, status: statusE, age: ageE} 
            : value);

            setData(updated)
            setActive(null)
    
                }else
                {
                    setName(name);
                    setStatus(status)
                    setJob(job)
                    setAge(age)
                    setActive({id, name, job, status, age})
                }
                
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
                    <input onChange={lookUp}  type="text" placeholder="Type in to search for..."/>
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
                        { data.length ?
                        data.map(({ id, name, job, status, age }) => {

                            return <tr key={id}>

                                <td>{id}</td>
                                <td> {active?.id === id ?
                                     <input name="name" onChange={(e)=> setName(e.target.value)} value={nameE} className="edit-input" type="text" autoComplete="off"/> 
                                     : name}  </td>
                                <td> {active?.id === id ?
                                     <input name="job" onChange={(e)=> setJob(e.target.value)} value={jobE} className="edit-input" type="text" autoComplete="off"/> 
                                     : job}  </td>
                                 <td> {active?.id === id ?
                                     <input name="status" onChange={(e)=> setStatus(e.target.value)} value={statusE} className="edit-input" type="text" autoComplete="off"/> 
                                     : status}  </td>
                                 <td> {active?.id === id ?
                                     <input name="age" onChange={(e)=> setAge(e.target.value)} value={ageE} className="edit-input" type="text" autoComplete="off"/> 
                                     : age}  </td>
                                <td className="action-td">

                                <button onClick={ ()=> onEdit ({id, name, job, status, age }, active?.id === id)} >
                                        {active?.id === id ? 'Save' : 'Edit'}
                                </button>

                                    <button onClick={()=>onDelete(id)}>Delete</button>
                                </td>

                            </tr>
                        }): <tr ><th colSpan={6}  className="no-data">No Data Found</th></tr>}
                    </tbody>
                </table>

                        {/* Adding user inputs  */}
                <div className="input-wrapper">
                    <input onChange={(e) =>{ setUserName( e.target.value )}} value={userName} type="text" placeholder=" Type in your Name" />
                    <input onChange={(e) =>{ setUserJob( e.target.value )}} value={userJob}  type="text" placeholder=" Type in your Job" />
                    <input onChange={(e) =>{ setUserStatus( e.target.value )}} value={userStatus} type="text" placeholder=" Type in your Status" />
                    <input onChange={(e) =>{ setUserAge( e.target.value )}} value={userAge} type="number" placeholder=" Type in your Age" />
                    <button onClick={onAdd} >Add Your User</button>


                </div>
            </>
            
        )
    
}

export default Table