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
`;

export const StyledSearchBar = styled(SearchBar)`
	margin: 2em 1.5em;
	width: 90%;
`;

export const SearchRow = styled.div`
    display: flex;
	justify-content: center;
	align-items: center;
	
`;

export const FirstLabel = styled(SortingMagicButton)`
    margin: 10vw;
`;

export const SecondLeftLabel = styled(SortingMagicButton)`
    
`;

export const SpacedLabel = styled(Label)`
    margin: 2vw;
`;

export const StyledPOListingArea = styled(POListingArea)`
	
`;