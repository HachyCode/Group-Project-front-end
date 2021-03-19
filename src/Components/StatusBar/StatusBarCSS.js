import styled from 'styled-components';

export const FilledDot = styled.div`
    height: 40px;
    width: 40px;
    border: 1px solid #9D4EDD;
	background-color: #9D4EDD;
    border-radius: 40px;

	@media screen and (max-width: 900px){
		height: 20px;
		width: 20px;
	}
`;

export const EmptyDot = styled.div`
    height: 40px;
    width: 40px;
    border: 1px solid #9D4EDD;
    border-radius: 40px;

	@media screen and (max-width: 900px){
		height: 20px;
		width: 20px;
	}
`;

export const EmptyLine = styled.div`
	height: 3px;
	width: 4.5vw;
	background-color: #ADB5BD;

	@media screen and (max-width: 900px){
		width: 6vw;
	}
`;

export const MainDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 1em 4vw 1em 3vw ;
`;