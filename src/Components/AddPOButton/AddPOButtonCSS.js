import styled from 'styled-components';

export const StyledAddPOButton = styled.button`
	padding: 0 2em;
	background: white;
	border: 2px #9D4EDD solid;
	border-radius: 30em;

	color: #9D4EDD;
	font-size: 3em;
	cursor: pointer;

	&:hover {
        background: #FF9E00;
		border: none;
		color: white;
    }
`;

export const StyledAddPOButtonBox = styled.div`
	position: sticky;
	bottom: 10px;
`;