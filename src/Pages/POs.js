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
    margin-right: 0.5em;
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
    margin-right: 1em;
`;

function POs() {

    function genPOs() {
        return [<POListing progress={1}/>, 
            <POListing poID="--------" supplier="64 Zoo Lane" progress={2}/>, 
            <POListing progress={3}/>, 
            <POListing progress={4}/>, 
            <POListing progress={5}/>, 
            <POListing progress={6}/>];
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
