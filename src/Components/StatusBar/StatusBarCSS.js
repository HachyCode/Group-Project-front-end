import styled from 'styled-components';

export const FilledDot = styled.div`
    color: purple;
    background-color: darkorchid;
    height: 20px;
    width: 20px;
    border: 1px solid darkorchid;
    border-radius: 10px;
`;

export const EmptyDot = styled.div`
    height: 20px;
    width: 20px;
    border: 1px solid black;
    border-radius: 10px;
`;

export const EmptyLine = styled.div`
    height: 1px;
    width: 3em;
    border: 1px solid black;
	background-color: black;
    border-right: none;
    border-left: none;
`;

export const FilledLine = styled.div`
    height: 1px;
    width: 3em;
    border: 1px solid darkorchid;
    border-right: none;
    border-left: none;
    color: purple;
    background-color: darkorchid;
`;

export const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 24px;
    align-items: center;
`;