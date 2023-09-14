import React, {useContext } from "react";
import { UserContext } from '../data';
import { Body } from "../body/body";

export const Nav = () =>{
    const {data} = useContext(UserContext)

    return(

        <div>
        <div className="navbar">
        <h1>Logo</h1>

        <h3>{data.film.length}</h3>
         <ul>
            <li>Home</li>
            <li>About</li>
            <li className="active">Movies</li>

         </ul>
        </div>
        <Body/> 
        </div>
        
    )
}