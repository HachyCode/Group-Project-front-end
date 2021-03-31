import styled from 'styled-components';

export const WarningBox = styled.div`
	background-color: ${props => props.backgroundColor};
	color: ${props => props.color};
	bottom: ${props => props.bottom};
	left: ${props => props.left};
	display: ${props => props.visible ? "inline" : "none"};

	padding: 0.5em 1em;
	margin: 0 0 1em 0;
	font-size: 1.1em;
	border-radius: 30px;
	border: none;
	background: #9D76DB;
	color: #E6E6E6;
`;