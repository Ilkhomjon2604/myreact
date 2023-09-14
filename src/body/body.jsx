import React, {useContext } from "react";
import { UserContext } from '../data';


export const Body = () =>{
    const {data, setData} = useContext(UserContext)

    const onDel = (id) =>{
        setData({film : data.film.filter((val)=> val.id !== id)})
    }
    return (
        <div className="wrapper">

            { data.film.length ?
                data.film.map(({name, url, id}) => 

                    <div key={id}>
                        <img src={url} alt="Img of the film" width='400px' height='250px'/>
                        <h2 className="film-title">{name}</h2>
                        <button className="del" onClick={()=> onDel(id)} > Remove Movie </button>
                   </div>
               
            ):  
                <h1>No Movie found</h1>
            }
        </div>
    )
}