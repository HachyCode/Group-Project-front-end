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

export const SupplierSections = styled.div`
	margin: 0 1.5vw;
	width: 25vw;

	display: flex;
	align-items: center;
	justify-content: left;

	@media screen and (max-width: 650px){
		width: 20vw;
	}
`;

export const POIDSections = styled.div`
	margin: 0 0 0 1.5vw;
	width: 6vw;

	display: flex;
	align-items: center;
	justify-content: center;
`;