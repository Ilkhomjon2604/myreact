import React, { useState, useReducer } from "react";
import { users } from "../mock";
import './table.css'



function Table()  {
    const [search, setSearch] = useState('');
    const [newUser, setNewUser] = useState({})
   
    const reducer = (state, action) =>{
        switch(action.type)
       { case 'Del':
            return state.filter(val => val.id !== action.payload.id);
        case  'Search':
            return users.filter((value) => `${value[search]}`.toLocaleLowerCase().includes(action.payload.val.toLocaleLowerCase()));
        case 'Add':
            return state = [...state, newUser]
        default: return state;}
    }


    const [data, dispatch] = useReducer(reducer, users);

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
                setNewUser(user)
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

            // setData(updated)
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
                    <input onChange={(e)=> dispatch({type : 'Search', payload : {val : e.target.value}})}  type="text" placeholder="Type in to search for..."/>
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

                                    <button onClick={()=> dispatch({type : 'Del', payload : {id : id}})}>Delete</button>
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
                    <button onClick={()=> dispatch({type:'Add', payload : { id : users.length + 1, name : userName, job : userJob, status : userStatus, age : userAge } })} >Add Your User</button>


                </div>
            </>
            
        )
    
}

export default Table