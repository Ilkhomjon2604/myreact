import { useState, createContext  } from "react";
import { ThemeProvider, createGlobalStyle } from 'styled-components';


const useContext = createContext();

export const Context = (children) =>{
    const [data, setData] = useState({length : 0, light : true})
    return (
        <useContext.Provider value={{data, setData}}>
            {children}
        </useContext.Provider>
    )
}