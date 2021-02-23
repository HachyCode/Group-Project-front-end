import styled from 'styled-components';

export const AddressDiv = styled.div`
    background: #ddd;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 1000px
`;

export const AddressBox = styled.div`
    background: #eee;

    margin: 10px;
    padding: 10px;

    max-height: 100px
    max-width: 500px
    min-width: 100px

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Address = styled.form`
    width: 25vw;
    height: auto;

    margin: 10px;
    padding: 4px 9vw;

    font-size: 1.5rem;

    @media screen and (max-width: 1000px) {
        margin: 5px;
        padding: 4px 6vw;
        font-size: 1rem;
    }

`;