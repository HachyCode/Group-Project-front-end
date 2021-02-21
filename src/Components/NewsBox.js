import React from 'react'
import styled from 'styled-components';

const MainBox = styled.div`
    display: flex;
    flex-direction: row;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.colour};
    border-radius: 5px;
    min-height: 5em;
    max-height: 7em;
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
        }
    }

    render = () => {
        return (
            <MainBox className={this.props.className} colour={this.state.isRed === "true" ? "crimson" : "black"}>
                <NewsImage src={this.props.image} alt={this.props.alt}/>
                <NewsBoxMain>
                    <NewsHeader>{this.props.heading}</NewsHeader>
                    <NewsParagraph>{this.props.paragraph}</NewsParagraph>
                </NewsBoxMain>
                <DateArea>
                    <Date>{this.props.date}</Date>
                </DateArea>
            </MainBox>
        );
    }
}

export default NewsBox;