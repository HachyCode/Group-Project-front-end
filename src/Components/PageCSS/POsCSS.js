import SearchBar from '../SearchBar/SearchBar';
import DateSearch from '../DateSearch/DateSearch';
import Label from '../Label/Label';
import POListing from '../POListing/POListing';
import DropDownSelect from '../DropDownSelect/DropDownSelect';
import SortingMagicButton from '../SortingMagicButton/SortingMagicButton';
import POListingArea from '../POListingArea/POListingArea';
import styled from 'styled-components';

export const MainBody = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SearchRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
`;

export const StyledSearchBar = styled(SearchBar)`
	margin: 1em 1.5em;
	width: 90%;
`;

export const StyledDateSearch = styled(DateSearch)`
    width: 25%;
    margin: 0 1.5em 0 0;
`;

export const SpacedLabel = styled(Label)`
    
`;

export const POSelectArea = styled.div`
    margin-left: 20vw;
    margin-right: 20vw;
    width: 60vw;
`;

export const FirstLabel = styled(SortingMagicButton)`
    margin-left: 1em;
`;

export const SecondLeftLabel = styled(SortingMagicButton)`
    margin-left: 3em;
    margin-right: 15%;
`;

export const StyledPOListing = styled(POListing)`
    margin-top: 1em;
    margin-bottom: 1em;
`;

export const StyledPOListingArea = styled(POListingArea)`

`;