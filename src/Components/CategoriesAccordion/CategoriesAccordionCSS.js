import styled from 'styled-components';
import CategoriesElement from '../CategoriesElement/CategoriesElement';
import Label from '../Label/Label';

export const AccordionMainBox = styled.div`
	border: 2px solid #9D4EDD;
    border-radius: 10px;

	display: flex;
	align-items: center;

	cursor: pointer;
	margin: 1em 0 0 0;

	&:hover {
		border-color: #ADB5BD;
		transition: 0.2s ease-in-out;
	}
`;

export const AccordionDropdownBox = styled.div`
	display: ${props => props.visible ? "flex" : "none"};
	flex-direction: column;
	align-items: center;
	justify-content: center;

	border: 2px solid #ADB5BD;
	border-radius: 0 0 10px 10px;
	border-top: 0;

	margin: 0 2.5em;
`;

export const DropDownBoxLabelsSection = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0.5em 0;
`;

export const StyledCategoriesElement = styled(CategoriesElement)`
	
`;

export const AccordionContainer = styled.div`
`;

export const ImageBox = styled.img`
	margin: 0 1em 0 0.5em;
	height: 7em;
	width: auto;
`;
export const ProductCodeBox = styled.div`
	margin: 0 1em;
	width: 4em;

	display: flex;
	align-items: center;
	justify-content: center;
`;
export const SupplierNameBox = styled.div`
	margin: 0 1em;
	width: 15em;

	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 700px){
		width: 12em;
	}
`;
export const AmountBox = styled.div`
	margin: 0 2em;
	width: 2em;

	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 600px){
		margin: 0 1em;
	}
`;

export const SupplierNameLabel = styled(Label)`
    
`;
export const CostLabel = styled(Label)`
    
`;
export const DeliveryTimeLabel = styled(Label)`
    
`;