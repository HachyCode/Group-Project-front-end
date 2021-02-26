import styled from 'styled-components';

export const BorderBox = styled.div`
    display: flex;
    flex-direction: row;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.colour};
    border-radius: 5px;
    height: 7em;
`;

export const MainBox = styled.div`
    display: flex;
    flex-direction: row;
`;

export const NewsImage = styled.img`
    height: 4em;
    width: 7em;
    margin-left: 3em;
    margin-right: 3em;
`;

export const NewsBoxMain = styled.div`
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const NewsHeader = styled.h3`
    margin-bottom: 1em;
`;

export const NewsParagraph = styled.p`
`;

export const DateArea = styled.div`
    width: 25%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
`;

export const Date = styled.p`
    width: 9em;
    color: lightgray;
`;

export const XButton = styled.button`
    pointer: pointer;
    border: none;
    background-color: transparent;
    outline: none;
    height: 1em;
    width: 1em;
    float: right;
`;