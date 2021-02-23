import React from 'react';
import styled from 'styled-components';

const FilledDot = styled.div`
    color: purple;
    background-color: purple;
    height: 20px;
    width: 20px;
    border: 1px solid purple;
    border-radius: calc(height / 2);
`;

const EmptyDot = styled.div`
    height: 20px;
    width: 20px;
    border: 1px solid black;
    border-radius: calc(height / 2);
`;

const EmptyLine = styled.div`
    height: 1px;
    width: 3em;
    border: 1px solid black;
`;

const FilledLine = styled.div`
    height: 1px;
    width: 3em;
    border: 1px solid purple;
    color: purple;
    background-color: purple;
`;

const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 24px;
`;

class StatusBar extends React.Component {
    constructor(props) {
        super(props);

        //this.colours = [ "purple", "pink", "red", "orange", "green" ];

        this.state = {
            progress: props.progress,
        }
    }

    generateBar = () => {
        let barComponents = [];
        for (let i = 0; i < 5; i++) {
            if (this.state.progress <= i + 1) {
                barComponents.push(<FilledDot/>);
                barComponents.push(<FilledLine/>);
            } else {
                barComponents.push(<EmptyDot/>);
                barComponents.push(<EmptyLine/>);
            }
        }

        //add final dot
        if (this.state.progress >= 6) {
            barComponents.push(<FilledDot/>);
        } else {
            barComponents.push(<EmptyDot/>);
        }

        return barComponents;
    }

    render = () => {
        return (
            <MainDiv>
                {this.generateBar()}
            </MainDiv>
        );
    }
}