import styled from 'styled-components';
import NewsBox from '../NewsBox/NewsBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledNewsBox = styled(NewsBox)`
	margin: 1em;
`;

export const NewsScrollIcon = styled(FontAwesomeIcon)`
	display: flex;
	justify-content: center;

	position: fixed;
	bottom: 0;
	color: black;
	font-size: 3em;
`;