import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import Label from '../Label/Label';
import DropDownSelect from '../DropDownSelect/DropDownSelect';
import SortingMagicButton from '../SortingMagicButton/SortingMagicButton';

export const MainBody = styled.div`
    display: flex;
    flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 900px){
		font-size: 0.8em;
	}

	@media screen and (max-width: 700px){
		font-size: 0.7em;
	}
`;

export const StyledSearchBar = styled(SearchBar)`
    margin: 2em 1.5em;
    width: 90vw;
`;

export const FilterTop = styled.div`
	position: sticky;
	top: 50px;

	background: white;
`;

export const FilterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em 0;
`;

export const SpacedLabel = styled(Label)`
    
`;

export const ItemNameFilter = styled(SortingMagicButton)`
    
`;

export const ProductCodeFilter = styled(SortingMagicButton)`

`;

export const AmountFilter = styled(SortingMagicButton)`
    
`;
