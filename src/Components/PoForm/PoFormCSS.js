import styled from 'styled-components';

export const MainInfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px 0 20px;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
`;