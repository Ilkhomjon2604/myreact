import React from 'react';
import { CardWrap, WrapGn, FilterBar, FilterBtn } from './body';
import { cards } from '../mock';

class Body extends React.Component {
    render() {
        return (

            <WrapGn>

                <FilterBar>

                <FilterBtn >IT</FilterBtn>
                <FilterBtn>Games</FilterBtn>
                <FilterBtn>Music</FilterBtn>
                <FilterBtn>News</FilterBtn>
                <FilterBtn>Technology</FilterBtn>

                </FilterBar>

                <CardWrap>

                </CardWrap>
                
            </WrapGn>

        )
    }
}

export default Body