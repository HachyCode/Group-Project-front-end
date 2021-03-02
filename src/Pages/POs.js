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
						<FirstLabel contents="PO ID" arrow/>
						<SecondLeftLabel contents="Supplier" arrow/>
						<SpacedLabel contents="All data"/>
						<SpacedLabel contents="Jason"/>
						<HalfEmSpacing/>
						<SpacedLabel contents="Ann"/>
						<HalfEmSpacing/><HalfEmSpacing/>
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
