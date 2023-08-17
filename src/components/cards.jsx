import React from 'react'
import './fruit.css'
class Card extends React.Component {
    render (){
      const  {data} = this.props;
        return (
            <div className='fruit-inner'>
                <img className='fruit-img' src={data.url} alt={data.title} />
                <h5 className='fruit-name'>{data.title}</h5>

            </div>
            
        )
    }
}

export default Card;