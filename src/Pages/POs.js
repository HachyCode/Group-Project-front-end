import React from 'react';
import {
	MainBody,
	HalfEmSpacing,
	SearchRow,
	StyledSearchBar,
	StyledDateSearch,
	SpacedLabel,
	POSelectArea,
	FirstLabel,
	SecondLeftLabel,
	StyledPOListing,
} from '../Components/PageCSS/POsCSS';

function genPOs() {
	return [
		<StyledPOListing poID="--------" supplier="64 Zoo Lane" progress={1}/>, 
		<StyledPOListing poID="--------" supplier="64 Zoo Lane" progress={2}/>, 
		<StyledPOListing poID="--------" supplier="64 Zoo Lane" progress={3}/>, 
		<StyledPOListing poID="--------" supplier="64 Zoo Lane" progress={4}/>, 
		<StyledPOListing poID="--------" supplier="64 Zoo Lane" progress={5}/>, 
		<StyledPOListing poID="--------" supplier="64 Zoo Lane" progress={6}/>
	];
}

function POs() {
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
						<FirstLabel name="PO ID" sortID="poID"/>
						<SecondLeftLabel name="Supplier" sortID="supplier" arrow/>
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
	);
}

export default POs;
