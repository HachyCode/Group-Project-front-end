import styled from 'styled-components';
import CategoriesElement from '../CategoriesElement/CategoriesElement';

export const AccordionMainBox = styled.div`
	border: 2px solid #FF9E00;
    border-radius: 10px;

	display: flex;
	align-items: center;

	cursor: pointer;
	margin: 1em 0 0 0;

	&:hover {
		border-color: #9D4EDD;
		transition: 0.2s ease-in-out;
	}

    &.active {
        border-color: #9D4EDD;
    }
`;

export const AccordionDropdownBox = styled.div`
	display: ${props => props.visible ? "flex" : "none"};
	flex-direction: column;

	border: 2px solid #FF9E00;
	border-radius: 10px;

	border-top-right-radius: 0;
	border-top-left-radius: 0;
	border-top: 0;

	background: paleturquoise;
`;

export const DropDownBoxLabelsSection = styled.div`
	display: flex;
	flex-direction: row;
`;

export const StyledCategoriesElement = styled(CategoriesElement)`

`;

export const AccordionContainer = styled.div`

`;

export const ImageBox = styled.img`
	margin: 0 1em;
	height: 7em;
	width: auto;
`;
export const ProductCodeBox = styled.div`
	margin: 0 1em;
`;
export const SupplierNameBox = styled.div`
	margin: 0 1em;
`;
export const AmountBox = styled.div`
	margin: 0 1em;
`;
export const DeliveryTimeBox = styled.div`
	margin: 0 1em;
`;