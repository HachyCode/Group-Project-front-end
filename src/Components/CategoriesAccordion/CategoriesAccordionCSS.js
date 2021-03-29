import styled from 'styled-components';

export const AccordionMainBox = styled.div`
	border: 2px solid #9D4EDD;
    border-radius: 10px;

	display: flex;
	align-items: center;
`;

export const AccordionDropdownBox = styled.div`
	display: ${props => props.visible ? "flex" : "none" }
	flex-direction: column; 
`;

export const DropDownBoxLabelsSection = styled.div`
	display: flex;
	flex-direction: row;
`;