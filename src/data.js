import { useState, createContext  } from "react";
import { card } from "./mock";

export const UserContext = createContext();

export const Context = ({children}) =>{
    const [data, setData] = useState({ film: card, light : true})
    
    return (
        <UserContext.Provider value={{data, setData}}>
            {children}
        </UserContext.Provider>
    )
}