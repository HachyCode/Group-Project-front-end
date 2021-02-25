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
`;

export const ItemBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

width: 90vw;
margin: 1em 0;
`;

export const FilterOrderID = styled.div`
background: transparent;
border-radius: 30px;
border: 2px solid grey;
padding: 0.25em 0;

margin: 0 1em;
text-align: center;
width: 6em;
`;
export const FilterItemID = styled.div`
background: transparent;
border-radius: 30px;
border: 2px solid grey;
padding: 0.25em 0;

margin: 0 1em;
text-align: center;
width: 5.5em;
`;
export const FilterItemName = styled.div`
background: transparent;
border-radius: 30px;
border: 2px solid grey;
padding: 0.25em 0;

margin: 0 1em;
text-align: center;
width: 21em;
`;
export const FilterQty = styled.div`
background: transparent;
border-radius: 30px;
border: 2px solid grey;
padding: 0.25em 0;

margin: 0;
text-align: center;
width: 5.5em;
`;
export const FilterUnitPrice = styled.div`
background: transparent;
border-radius: 30px;
border: 2px solid grey;
padding: 0.25em 0;

margin: 0 1em;
text-align: center;
width: 6em;
`;
export const FilterSubTotal = styled.div`
background: transparent;
border-radius: 30px;
border: 2px solid grey;
padding: 0.25em 0;

margin: 0 1em;
text-align: center;
width: 6em;
`;

export const Line = styled.div`
width: 90vw;
height: 1px;
background: orange;
`;

export const OrderID = styled.div`
margin: 0 0.5em;
text-align: center;
width: 7em;
`;
export const ItemID = styled.div`
margin: 0 0.5em;
text-align: center;
width: 6em;
`;
export const ItemName = styled.div`
margin: 0 0.5em;
text-align: center;
width: 23em;
`;
export const Qty = styled.input`
font-size: 1.5rem;
width: 150px;
border-radius: 20px;
border: 2px solid purple;
text-align: center;
`;
export const UnitPrice = styled.div`
margin: 0 0.5em;
text-align: center;
width: 6em;
`;
export const SubTotal = styled.div`
margin: 0 0.5em;
text-align: center;
width: 8em;
`;

export const OrderAddBtn = styled.button`
margin: 1em 0 0 0;
border-radius: 20px;
border: 2px solid purple;
color: purple;
padding: 0.5em 41vw;
font-size: 1.2rem;
background: transparent;
`;