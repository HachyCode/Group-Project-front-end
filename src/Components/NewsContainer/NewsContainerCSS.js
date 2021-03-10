import styled from 'styled-components';
import NewsBox from '../NewsBox/NewsBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledNewsBox = styled(NewsBox)`
	height: auto;
	width: 50%;

	margin: 1em;
	padding: 1em;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const NewsScrollIcon = styled(FontAwesomeIcon)`
	display: flex;
	justify-content: center;

	position: fixed;
	bottom: 0;
	color: black;
	font-size: 3em;
`;