import styled from 'styled-components';
import Categories from '../../Pages/Categories';

export const CategoriesDiv = styled(Categories)`
	display: ${props => props.displayCategories ? "flex" : "none"};
`;

export const OrderAddBtn = styled.button`
	margin: 1em 0 0 0;
    border-radius: 20px;
    border: 2px solid purple;
    color: purple;
    padding: 0.5em;
    width: 88vw;
    font-size: 1.2rem;
    background: white;
`;

export const AddItemBox = styled.div`
    display: flex;
    flex-direction: column;
	justify-content: top;
	align-items: center;
`;