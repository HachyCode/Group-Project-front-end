import styled from 'styled-components';
import CategoriesElement from '../CategoriesElement/CategoriesElement';

export const AccordionMainBox = styled.div`
	border: 2px solid #9D4EDD;
    border-radius: 10px;

	display: flex;
	align-items: center;
`;

export const AccordionDropdownBox = styled.div`
	display: ${props => props.visible ? "flex;" : "none;" }
	flex-direction: column; 
	border: 2px solid #FF9E00;
    border-radius: 10px;
	border-top-right-radius: 0;
	border-top-left-radius: 0;
	border-top: 0;
	margin-left: 7em;
	margin-right: 7em;
`;

export const DropDownBoxLabelsSection = styled.div`
	display: flex;
	flex-direction: row;
`;

export const StyledCategoriesElement = styled(CategoriesElement)`

`;

export const AccordionContainer = styled.div``;

export const ImageBox = styled.div``;
export const ProductCodeBox = styled.div``;
export const SupplierNameBox = styled.div``;
export const AmountBox = styled.div``;
export const DeliveryTimeBox = styled.div``;