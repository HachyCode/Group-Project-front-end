import React from 'react';
import styled from 'styled-components';

const MainBox = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
`;

const SearchBox = styled.input`
    border: none;
    outline: none;
`;

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
    }

    render = () => {
        return (
            <MainBox className={this.props.className}>
                <i class="fas fa-search"></i>
                <SearchBox type="text"/>
            </MainBox>
        );
    }
}

export default SearchBar;