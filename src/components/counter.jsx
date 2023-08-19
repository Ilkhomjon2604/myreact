import React, { Component } from "react";
import './fruit.css'
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'WebBrain',
            count: 0
        }
    }
    render() {

        const add = () => { if(this.state.count < 15) this.setState ({count : this.state.count + 1}) }
        const minus = () => {if(this.state.count > 0) this.setState ({count : this.state.count - 1}) }
        const changeTitle = (e) =>{ this.setState({title : e.target.value})}
        // const replace = () => {
        //    return  changeTitle ()
        // }

        return (
            <div>
                <h1>{this.state.title}</h1>

                <div className="wrap">
                <button type="submit" onClick={add}>+</button>
                <h1>{this.state.count}</h1>
                <button type="submit" onClick={minus}>-</button>
                </div>

                <input id="input" className="input" type="text" placeholder="Type a text" change={changeTitle}/>
                {/* <button type="submit" onClick={replace}>click</button> */}
               
                
               
            </div>

        )
    }
}

export default Counter;