import SearchBar from '../SearchBar/SearchBar';
import Label from '../Label/Label';
import SortingMagicButton from '../SortingMagicButton/SortingMagicButton';
import POListingArea from '../POListingArea/POListingArea';
import styled from 'styled-components';

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

export const SearchRow = styled.div`
    display: flex;
	justify-content: center;
	align-items: center;
`;

export const FirstLabel = styled(SortingMagicButton)`
    
`;

export const FirstLabelBox = styled.div`
    min-width: 7vw;
	margin: 0;
`;

export const FilterTop = styled.div`
	position: sticky;
	top: 50px;

	background: white;
`;

export const SecondLeftLabel = styled(SortingMagicButton)`
    
`;

export const SecondLeftLabelBox = styled.div`
    width: 20vw;
	margin: 0 6vw 0 2vw;

	@media screen and (max-width: 800px){
		margin: 0 2vw 0 2vw;
		width: 15vw;
	}
`;

export const SpacedLabel = styled(Label)`
    margin: 0.3vw;
	width: 3.5vw;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledPOListingArea = styled(POListingArea)`
	
`;

export const AddPOButton = styled.button``;