import styled from 'styled-components';

export const BtnBox = styled.div`
    background: #eee;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 10px;
    height: auto;
`;

export const LeftBtn  = styled.div`

`;

export const RightBtn = styled.div`

`;

export const Btn = styled.button`
    border-radius: 20px;
    border: 2px solid #9D4EDD;
    color: #9D4EDD;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 1.5rem;
    
    color: ${props => props.theme.main};
    border: 2px solid ${props => props.theme.main};
    
    @media screen and (max-width: 700px) {
        font-size: 1.3rem;
        margin: 0 15px;
    }
`;