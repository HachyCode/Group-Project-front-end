import SearchBar from '../SearchBar/SearchBar';
import DateSearch from '../DateSearch/DateSearch';
import Label from '../Label/Label';
import POListing from '../POListing/POListing';
import DropDownSelect from '../DropDownSelect/DropDownSelect';
import styled from 'styled-components';

export const MainBody = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HalfEmSpacing = styled.div`
    margin-left: 0.5em;
`;

export const SearchRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
`;

export const StyledSearchBar = styled(SearchBar)`
    margin-left: 1em;
    margin-right: 1em;
    width: 60%;
`;

export const StyledDateSearch = styled(DateSearch)`
    width: 25%;
`;

export const SpacedLabel = styled(Label)`
    margin-right: 0.85em;
`;

export const POSelectArea = styled.div`
    margin-left: 20vw;
    margin-right: 20vw;
    width: 60vw;
`;

export const FirstLabel = styled(Label)`
    margin-left: 1em;
`;

export const SecondLeftLabel = styled(Label)`
    margin-left: 3em;
    margin-right: 15%;
`;

export const StyledPOListing = styled(POListing)`
    margin-top: 1em;
    margin-bottom: 1em;
`;