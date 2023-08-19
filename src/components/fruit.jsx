import React from 'react'
import Cards from './cards'
import {fruit} from './mock'

class Fruit extends React.Component {
    render (){
    
        return (
            <div className='wrapper'>
                <h1 className='fruit-title'> Fruits</h1>
                <div className='fruit-wrapper'>

                { fruit.map( val => <Cards data = {val} />) }
              
               
                </div>

            </div>
            
        )
    }
}
export default Fruit;