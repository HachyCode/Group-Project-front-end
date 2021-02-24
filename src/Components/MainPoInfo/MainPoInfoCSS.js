import styled from 'styled-components';

export const InfoBox = styled.div`
    width: auto;
    height: auto;
`;

export const Box = styled.div`
    border-radius: 20px;
    border: 2px solid grey;
    padding: 0.5em 1em;
    margin: 1em;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Text = styled.div`
    font-size: 1.3rem;
    color: grey;

    @media screen and (max-width: 1000px) {
        margin: 0 0 5px 0;
    }
`;

export const Input = styled.input`
    width: 25em;
    padding: 2px 10px;
    margin: 0 1em;
    font-size: 1.2rem;
    background: palevioletred;
    border: transparent ;

    @media screen and (max-width: 1000px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 1rem;
        width: 15em;
    }
`;