import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BorderBox = styled.div`
    border: 2px solid #9D4EDD;
    border-radius: 10px;
    height: 7em;

    
    
    
`;

export const MainBox = styled.div`
    display: flex;
    flex-direction: row;
`;

export const NewsImage = styled.img`
    height: 4em;
    width: 7em;

    background: palevioletred;
`;

export const NewsBoxMain = styled.div`
    background: pink;
`;

export const NewsHeader = styled.h3`
`;

export const NewsParagraph = styled.p`
`;

export const DateArea = styled.div`
    background: palevioletred;
`;

export const Date = styled.p`
    color: lightgray;
`;

export const XButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
    float: right;
`;

export const XIcon = styled(FontAwesomeIcon)`

`;