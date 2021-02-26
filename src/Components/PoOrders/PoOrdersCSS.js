import styled from 'styled-components';

export const OrderBox = styled.div`
    font-size: 1.5rem;
    border: 2px solid orange;
    border-radius: 30px 30px 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em 2em 2em 2em;
    margin: 1em 1em 0 1em;

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

export const SmallFilter = styled.div`
    border-radius: 30px;
    border: 2px solid grey;
    padding: 0.25em 0;
    text-align: center;
    width: 10vw;

    @media screen and (max-width: 850px){
        border: 1px solid grey;
        border-radius: 5px;
    }
`;
export const LargeFilter = styled.div`
    background: transparent;
    border-radius: 30px;
    border: 2px solid grey;
    padding: 0.25em 0;
    text-align: center;
    width: 40vw;

    @media screen and (max-width: 850px){
        border: 1px solid grey;
        border-radius: 5px;
    }
`;

export const Line = styled.div`
    width: 90vw;
    height: 1px;
    background: orange;
`;

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

export const OrderAddBtn = styled.button`
    margin: 1em 0 0 0;
    border-radius: 20px;
    border: 2px solid purple;
    color: purple;
    padding: 0.5em;
    width: 88vw;
    font-size: 1.2rem;
    background: transparent;
`;