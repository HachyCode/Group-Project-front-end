import styled from 'styled-components';

export const AddressDiv = styled.div`
    background: #ddd;

    display: flex;
    justify-content: center;
    align-items: center;

    height: auto;
`;

export const AddressBox = styled.div`
    margin: 10px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Address = styled.form`
    width: 25vw;
    height: 5vh;

    margin: 10px;
    padding: 4px 9vw;

    font-size: 1.5rem;

    @media screen and (max-width: 1100px) {
        margin: 5px;
        padding: 4px 6vw;
        font-size: 1.2rem;
        height: auto;
    }

`;

export const Supplier = styled.form`
    width: 25vw;
    height: auto;

    margin: 0;
    padding: 4px 9vw;

    display: flex;
    align-items: center;

    @media screen and (max-width: 1000px) {
        padding: 4px 6vw;
        font-size: 1rem;
    }
`;

export const Select = styled.select`
    width: auto;
    height: 5vh;

    min-height: 2em;
    min-width: 10em;

    font-size: 1rem;

    border: 6px solid transparent;
    border-color: transparent transparent;

    background: purple;
    color: #fff;
`;