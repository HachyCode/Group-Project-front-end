import styled from 'styled-components';

export const Box = styled.div`
    border: 2px solid #FF9E00;
    border-radius: 10px;

	display: flex;
	align-items: center;

    cursor: pointer;

	&:hover {
		border-color: #9D4EDD;
	}
`;

export const FirstTwoSections = styled.div`
    margin: 0 0 0 2em;
	padding: 0 2vw;
`;