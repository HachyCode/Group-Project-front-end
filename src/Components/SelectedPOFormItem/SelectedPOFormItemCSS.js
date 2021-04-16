import styled from 'styled-components';

export const SmallText = styled.div`
    text-align: center;
    width: 10vw;
    height: auto;
    text-align: center;

    min-width: 70px;

    @media screen and (max-width: 600px){
        
    }

`;
export const LargeText = styled.div`
    text-align: center;
    width: 40vw;
    min-width: 100px;
    height: auto;
    text-align: center;

    @media screen and (max-width: 900px){
        margin: 0 5px;
    }

    @media screen and (max-width: 700px){
        width: 35vw;
    }
`;
export const Qty = styled.input`
    font-size: 1.5rem;
    width: 10vw;
    border-radius: 20px;
    border: 2px solid purple;
    text-align: center;
    height: auto;

    @media screen and (max-width: 900px){
        border: 1px solid purple;
        border-radius: 5px;
    }

    @media screen and (max-width: 1500px){
        font-size: 1.2rem;
    }

    @media screen and (max-width: 1200px){
        font-size: 1rem;
    }
`;

export const ItemBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 90vw;
    margin: 1em 0;
`;