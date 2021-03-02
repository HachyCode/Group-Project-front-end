import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';

export const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledSearchBar = styled(SearchBar)`
    margin: 1em 1.5em;
    width: 90%;
`;