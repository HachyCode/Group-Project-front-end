import styled from 'styled-components';

export const LogoPlace = styled.div`
    background: orange;
    width: 20vw;
    min-width: 9em;
    height: 15vh;
    margin: 20px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5rem;

    @media screen and (max-width: 1000px) {
        height: 30vh;
        width: 50vw;
        margin: 15px 0 0 0;
    }
`;