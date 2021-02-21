import React from 'react'
import styled from 'styled-components';

const BorderBox = styled.div`
    
`;

const MainBox = styled.div`
    display: flex;
    flex-direction: row;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.colour};
    border-radius: 5px;
    height: 7em;
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

    toggleSelected = () => {
        this.setState({isSelected: !this.state.isSelected});
    }

    genDeleteButton = () => {
        if (this.state.isSelected) {
            return (<XButton><img alt="xButton"/></XButton>)
            //return (<a href="" onClick={this.delete}><img alt="xButton"/></a>);
        }
    }

    delete = () => {
        this.props.onDelete();
    }

    render = () => {
        return (
            <MainBox className={this.props.className} colour={this.getColour} onClick={this.toggleSelected}>
                <NewsImage src={this.props.image} alt={this.props.alt}/>
                <NewsBoxMain>
                    <NewsHeader>{this.props.heading}</NewsHeader>
                    <NewsParagraph>{this.props.paragraph}</NewsParagraph>
                </NewsBoxMain>
                <DateArea>
                    <Date>{this.props.date}</Date>
                </DateArea>
                { this.state.isSelected ? this.genDeleteButton() : ""}
            </MainBox>
        );
    }
}

export default NewsBox;