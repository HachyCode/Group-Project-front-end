import styled from 'styled-components';

export const TotalBoxs = styled.div`
    width: auto;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin: 1px 1.5em 0 0;
`;

export const Box = styled.div`
    border-radius: 30px 0 0 30px;
    border: 2px solid orange;
    padding: 0.5em 1em;
    margin: 1px 0;

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
`;

export const Value = styled.div`
    width: 8em;
    padding: 2px 10px;
    font-size: 1.2rem;
    background: transparent;
    border: transparent ;
`;