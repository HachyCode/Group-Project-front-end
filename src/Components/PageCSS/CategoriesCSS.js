import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import Label from '../Label/Label';
import DropDownSelect from '../DropDownSelect/DropDownSelect';

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

export const FilterBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
`;

export const SpacedLabel = styled(Label)`
    
`;

export const SupplierNameFilter = styled(DropDownSelect)`
    
`;

export const AmountFilter = styled(DropDownSelect)`
    
`;

export const DeliveryTimeFilter = styled(DropDownSelect)`
    
`;

export const CategoriesBox = styled.div`

`;
