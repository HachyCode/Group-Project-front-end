import styled from 'styled-components';
import InputBox from '../InputBox/InputBox';

export const OutlineBox = styled.div`
    border: 1px solid black;
    border-radius: 5px;
`;

export const StyledInputBox = styled(InputBox)`
    border: none;
    border-radius: 5px;
    outline: none;
    width: 70%;
`;
