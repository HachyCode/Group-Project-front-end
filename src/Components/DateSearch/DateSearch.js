import React from 'react';
import styled from 'styled-components';
import InputBox from '../InputBox/InputBox';

const OutlineBox = styled.div`
    border: 1px solid black;
    border-radius: 5px;
`;

const StyledInputBox = styled(InputBox)`
    border: none;
    outline: none;
    width: 70%;
`;

class DateSearch extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render = () => {
        return (
            <OutlineBox className={this.props.className}>
                <i class="fas fa-calendar"/>
                <StyledInputBox default="DD/MM/YYYY"/>
            </OutlineBox>
        );
    }
}

export default DateSearch;