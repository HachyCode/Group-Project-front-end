import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import Label from '../Label/Label';
import SortingMagicButton from '../SortingMagicButton/SortingMagicButton';

export const MainBody = styled.div`
    display: flex;
    flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 700px){
		font-size: 0.8em;
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
    margin: 1em 0;
`;

export const SpacedLabel = styled(Label)`
	margin: 0 1.5em 0 0;
	width: 3em;

	@media screen and (max-width: 700px){
		margin: 0 1em 0 0;
	}
`;

export const ItemNameFilterBox = styled.div`
	margin: 0;
	width: 10em;
`;

export const ProductCodeFilterBox = styled.div`
	margin: 0 1em 0 0;
	min-width: 7em;
`;

export const AmountFilterBox = styled.div`
	margin: 0 0 0 5.5em;
	width: 6em;

	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 700px){
		margin: 0 0 0 1em;
	}
`;

export const ItemNameFilter = styled(SortingMagicButton)``;

export const ProductCodeFilter = styled(SortingMagicButton)``;

export const AmountFilter = styled(SortingMagicButton)``;
