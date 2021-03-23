import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MainBox = styled.div`
    border: 2px solid;
    border-color: ${props => props.colour};
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    min-height: 8em;
    width: 50%;
	cursor: pointer;

    @media screen and (max-width: 1000px){
        width: 80%;
    }

    @media screen and (max-width: 700px){
        flex-direction: column;
        min-height: 17em;
    }

    &:hover {
        border-color: #9D4EDD;
    }
`;

export const InfoIconBox = styled.div`
    height: 11em;

    display: flex;
    align-items: top;
    justify-content: Left;
    position: absolute;

    @media screen and (max-width: 700px){
        height: 0;
        width: 90%;
        justify-content: flex-start;
    }
`;

export const InfoIcon = styled(FontAwesomeIcon)`
    color: ${props => props.newIcon};
    font-size: 2em;
`;

export const NewsImage = styled.img`
    height: 8em;
    width: auto;
	border-radius: 10px;

    @media screen and (max-width: 700px){
        height: auto;
        width: 10em;
    }
`;

export const NewsBoxMain = styled.div`
    width: 60%;
    margin: 1em 0.5em;

    @media screen and (max-width: 700px){
        margin: 0;
    }
`;

export const NewsHeader = styled.h3`
`;

export const NewsParagraph = styled.p`
`;

export const DateArea = styled.div`
    height: 7em;
    display: flex;
    justify-content: flex-end;
    align-items: top;

    @media screen and (max-width: 700px){
        height: 1em;
        justify-content: center;
        align-items: center;
        margin: 1em;
    }
`;

export const Date = styled.p`
    color: #ADB5BD;
`;

export const XButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;

    height: 8em;
    margin: 8px;

    display: flex;
    justify-content: flex-end;
    align-items: top;

    @media screen and (max-width: 700px){
        height: 2em;
        width: 75%;
        justify-content: flex-end;
        position: absolute;
    }
`;

export const XIcon = styled(FontAwesomeIcon)`
    font-size: 2em;
    color: #ADB5BD;

    &:hover {
        color: #9D4EDD;
    }
`;