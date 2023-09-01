import React from 'react';
import { CardWrap, WrapGn, FilterBar, FilterBtn , Card} from './body';
import { cards } from '../mock';

class Body extends React.Component {
    render() {

        this.state = {
            card : cards
        }

        const Filter = (e)=>{
            let res = this.state.card.filter(({type}) => e.target.dataset.filter == type)
            this.setState({
                card: res,
            })
        }
        
        const onSearch = (e) =>{
            let result = this.state.card.filter(value => value.name === e.target.value)
            this.setState({
                card : result
            })
        }
          
        return (

            <WrapGn>

                <FilterBar>
                <FilterBtn onClick={Filter} className='filterBtn activeBtn'>All...</FilterBtn>
                <FilterBtn onClick={Filter}  data-filter = 'IT' className='filterBtn'>IT Tech</FilterBtn>
                <FilterBtn onClick={Filter} data-filter = 'Game' className='filterBtn'>Games</FilterBtn>
                <FilterBtn onClick={Filter} data-filter = 'Music' className='filterBtn'>Music</FilterBtn>
                <FilterBtn onClick={Filter} data-filter = 'News' className='filterBtn'>News</FilterBtn>
                <FilterBtn onClick={Filter} data-filter = 'Tech' className='filterBtn'>Technology</FilterBtn>

                </FilterBar>

                <CardWrap>
                    {this.state.card.map(({img, icon, title, name, watched}, index)=>{
                     return  <Card key={index}>
                            <Card.Img  src={img} alt={title} />
                            <Card.Detail>
                            <img src={icon} alt={name} className='rounded' />
                            <div>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>{name}</Card.Text>
                                <Card.Text>{watched}</Card.Text>

                            </div>

                            </Card.Detail>
                        </Card>
                    })}
                </CardWrap>
                
            </WrapGn>

        )
    }
}

export default Body