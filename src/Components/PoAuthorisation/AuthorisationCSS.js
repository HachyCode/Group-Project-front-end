import styled from 'styled-components';

export const AuthorisationBox = styled.div`
    display: flex;
    align-items: left;
    margin: 20px 15px;

    @media screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Box = styled.div`
    border: 2px solid purple;
    border-radius: 15px;
    margin: 10px;
    padding: 10px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.div`
    font-size: 1.2rem;
    margin:0 0 10px 0;
`;

export const Date = styled.input`
    font-size: 1.2rem;
    border: 2px solid purple;
    border-radius: 15px;
    padding: 2px 15px;
`;