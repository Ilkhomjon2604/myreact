import React, { useState } from 'react';
import './App.css'
import Login from './component/login/login';
import SignUp from './component/signup/signup';


function App(){
  const [active,  setActive] = useState(true)
  
  function changePage(value) {
    setActive(value)
  }
  return (
    <div className='main-wrap'>

      {active ? <Login changePage={changePage}/> : <SignUp changePage={changePage}/>}
      
      
    </div>
    
  )
 
  
}



export default App;