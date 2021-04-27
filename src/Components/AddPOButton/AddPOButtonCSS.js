import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledAddPOButton = styled.button`
	padding: 0.0005em 100vw;
	background: #9D4EDD;
	border: none;

	color: white;
	font-size: 3em;
	cursor: pointer;

	&:hover {
        background: #FF9E00;
    }
`;

export const StyledAddPOButtonIcon = styled(FontAwesomeIcon)``;

export const StyledAddPOButtonBox = styled.div`
	position: sticky;
	bottom: 0;


`;