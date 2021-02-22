import React from 'react'
import styled from 'styled-components';
import {eventBus, NewsBoxClick} from '../EventBus';

const BorderBox = styled.div`
    display: flex;
    flex-direction: row;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.colour};
    border-radius: 5px;
    height: 7em;
`;

const MainBox = styled.div`
    display: flex;
    flex-direction: row;
`;

const NewsImage = styled.img`
    height: 4em;
    width: 7em;
    margin-left: 3em;
    margin-right: 3em;
`;

const NewsBoxMain = styled.div`
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const NewsHeader = styled.h3`
    margin-bottom: 1em;
`;

const NewsParagraph = styled.p`
`;

const DateArea = styled.div`
    width: 25%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
`;

const Date = styled.p`
    width: 9em;
    color: lightgray;
`;

const XButton = styled.button`
    pointer: pointer;
    border: none;
    background-color: transparent;
    outline: none;
    height: 1em;
    width: 1em;
`;

class NewsBox extends React.Component {
    constructor(props) {
        super(props);
        eventBus.on(NewsBoxClick, (data) => { if (data.sender !== this && this.state.isSelected) this.toggleSelected(false)});
        this.props = props;
        let paragraph = props.paragraph.slice(0, 220);

        this.state = {
            heading: props.heading,
            paragraph: paragraph,
            date: props.date,
            image: props.image,
            alt: props.alt,
            isRed: props.isRed,
            isSelected: false,
        }
    }

    getColour = () => {
        return this.state.isSelected ? "orange" : (this.state.isRed === "true" ? "crimson" : "black");
    }

    toggleSelected = (emit = true) => {
        if (emit) eventBus.emit(NewsBoxClick, { sender: this });
        this.setState({isSelected: !this.state.isSelected});
    }

    genDeleteButton = () => {
        if (this.state.isSelected) {
            return (<XButton onClick={this.delete}><img alt="xButton"/></XButton>)
            //return (<a href="" onClick={this.delete}><img alt="xButton"/></a>);
        }
    }

    delete = () => {
        this.props.onDelete();
    }

    render = () => {
        return (
            <BorderBox  colour={this.getColour} className={this.props.className}>
                <MainBox onClick={this.toggleSelected}>
                    <NewsImage src={this.props.image} alt={this.props.alt}/>
                    <NewsBoxMain>
                        <NewsHeader>{this.props.heading}</NewsHeader>
                        <NewsParagraph>{this.props.paragraph}</NewsParagraph>
                    </NewsBoxMain>
                    <DateArea>
                        <Date>{this.props.date}</Date>
                    </DateArea>
                </MainBox>

                { this.state.isSelected ? this.genDeleteButton() : ""}
            </BorderBox>
        );
    }
}

export default NewsBox;