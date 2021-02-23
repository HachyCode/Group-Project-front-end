import React from 'react';
import styled from 'styled-components';

const Box = styled.div `
    border: 1px solid black;
    border-radius: 0.5em;
    padding: 2px;
`;

class Label extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render = () => {
        return (
            <Box className={this.props.className}>
                <p>{this.props.contents}</p>
            </Box>
        );
    }
}

export default Label;