import React from 'react';
import styled from 'styled-components';
import SearchBar from '../Components/SearchBar/SearchBar';
import DateSearch from '../Components/DateSearch/DateSearch';
import Label from '../Components/Label/Label';

const MainBody = styled.div`
    display: flex;
    flex-direction: column;
`;

const SearchRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const SpacedLabel = styled(Label)`
    margin-right: 0.5em;
`;

function POs() {
    return (
        <div>
            {/*Daniel*/}
            <MainBody>
                <SearchRow>
                    <SearchBar/>
                    <DateSearch/>
                </SearchRow>
                <SearchRow>
                    <SpacedLabel contents="All data"/>
                    <SpacedLabel contents="Jason"/>
                    <SpacedLabel contents="Ann"/>
                    <SpacedLabel contents="Send"/>
                    <SpacedLabel contents="Accepted"/>
                    <SpacedLabel contents="Delivered"/>

                </SearchRow>

            </MainBody>
        </div>
    )
}

export default POs
