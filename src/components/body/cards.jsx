import React from 'react';
import { CardWrap, WrapGn, FilterBar, FilterBtn, Card, HeadWrap, Search, Icons, UserWrap } from './body';
import { cards } from '../mock';
import user from '../../assets/user.jpg'


class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: cards

        }
    }
    render() {



        const Filter = (e) => {

            let res = cards.filter(({ type }) => type === e.target.dataset.filter)

            this.setState({
                card: res,
            })
            // e.target.className = 'activeBtn'
        }

        const FilterReset = () => this.setState({ card: cards })



        return (



            <WrapGn>

                <HeadWrap>

                    <div></div>

                    <Search>
                        <Search.Input placeholder='Type for search ...' type='text'></Search.Input>
                        <Icons.Search />
                    </Search>

                    <UserWrap>
                        <Icons.VideoAdd />
                        <Icons.Notification />
                        <Icons.User src={user} />


                    </UserWrap>

                </HeadWrap>

                <FilterBar>
                    <FilterBtn onClick={FilterReset} className='filterBtn '>All...</FilterBtn>
                    <FilterBtn onClick={Filter} data-filter='IT' className='filterBtn'>IT Tech</FilterBtn>
                    <FilterBtn onClick={Filter} data-filter='Game' className='filterBtn'>Games</FilterBtn>
                    <FilterBtn onClick={Filter} data-filter='Music' className='filterBtn'>Music</FilterBtn>
                    <FilterBtn onClick={Filter} data-filter='News' className='filterBtn'>News</FilterBtn>
                    <FilterBtn onClick={Filter} data-filter='Tech' className='filterBtn'>Technology</FilterBtn>

                </FilterBar>

                <CardWrap>
                    {this.state.card.map(({ img, icon, title, name, watched }, index) => {
                        return <Card key={index}>
                            <Card.Img src={img} alt={title} />
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