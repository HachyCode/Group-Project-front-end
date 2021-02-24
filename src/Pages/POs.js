import React from 'react';
import styled from 'styled-components';
import SearchBar from '../Components/SearchBar/SearchBar';
import DateSearch from '../Components/DateSearch/DateSearch';
import Label from '../Components/Label/Label';
import POListing from '../Components/POListing/POListing';
import DropDownSelect from '../Components/DropDownSelect/DropDownSelect';

const MainBody = styled.div`
    display: flex;
    flex-direction: column;
`;

const SearchRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledSearchBar = styled(SearchBar)`
    margin-left: 1em;
    margin-right: 1em;
    width: 60%;
`;

const StyledDateSearch = styled(DateSearch)`
    width: 25%;
`;

const SpacedLabel = styled(Label)`
    margin-right: 0.85em;
`;

const POSelectArea = styled.div`
    margin-left: 20vw;
    margin-right: 20vw;
    width: 60vw;
`;

const FirstDropDown = styled(DropDownSelect)`
    margin-left: 1em;
`;

const SecondLeftDropDown = styled(DropDownSelect)`
    margin-left: 3em;
    margin-right: 15%;
`;

const StyledPOListing = styled(POListing)`
    margin-top: 1em;
    margin-bottom: 1em;
`;

function POs() {

    function genPOs() {
        return [
            <StyledPOListing poID="--------" supplier="64 Zoo Lane" progress={1}/>, 
            <StyledPOListing poID="--------" supplier="64 Zoo Lane" progress={2}/>, 
            <StyledPOListing poID="--------" supplier="64 Zoo Lane" progress={3}/>, 
            <StyledPOListing poID="--------" supplier="64 Zoo Lane" progress={4}/>, 
            <StyledPOListing poID="--------" supplier="64 Zoo Lane" progress={5}/>, 
            <StyledPOListing poID="--------" supplier="64 Zoo Lane" progress={6}/>];
    }

    return (
        <div>
            {/*Daniel*/}
            <MainBody>
                <SearchRow>
                    <StyledSearchBar/>
                    <StyledDateSearch/>
                </SearchRow>
                <POSelectArea>
                    <SearchRow>
                        <FirstDropDown default="PO ID"/>
                        <SecondLeftDropDown default="Supplier"/>
                        <SpacedLabel contents="All data"/>
                        <SpacedLabel contents="Jason"/>
                        <SpacedLabel contents="Ann"/>
                        <SpacedLabel contents="Send"/>
                        <SpacedLabel contents="Accepted"/>
                        <SpacedLabel contents="Delivered"/>
                    </SearchRow>
                    {genPOs()}
                </POSelectArea>

            </MainBody>
        </div>
    )
}

export default POs
