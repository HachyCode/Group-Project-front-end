import styled from 'styled-components';

export const WarningBox = styled.div`
	background-color: ${props => props.backgroundColor};
	color: ${props => props.color};
	position: fixed;
	border: 1px solid black;
	bottom: ${props => props.bottom};
	left: ${props => props.left};
	display: ${props => props.visible ? "inline" : "none"};
`;