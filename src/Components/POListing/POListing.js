import React from 'react';
import styled from 'styled-components';
//import SearchBar from '../SearchBar/SearchBar';
import StatusBar from '../StatusBar/StatusBar';

const Box = styled.div`
    border: 1px solid orange;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
`;

const FirstTwoSections = styled.div`
    padding-left: 2em;
    width: 10%;
`;

class POListing extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render = () => {
        return (
            <Box className = {this.props.className}>
                <FirstTwoSections>
                    {this.props.poID}
                </FirstTwoSections>
                <FirstTwoSections>
                    {this.props.supplier}
                </FirstTwoSections>
                <StatusBar progress={this.props.progress}/>
            </Box>
        );
    }
}

export default POListing;