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
import POListing from '../Components/POListing/POListing';
import {eventBus, SortingUpdate} from '../EventBus';

function POs() {
	const POListingData = [
		{
			poID: "--------",
			supplier: "64 Zoo Lane",
			progress: 1,
		},
		{
			poID: "--------",
			supplier: "64 Zoo Lane",
			progress: 2,
		},
		{
			poID: "--------",
			supplier: "64 Zoo Lane",
			progress: 3,
		},
		{
			poID: "--------",
			supplier: "64 Zoo Lane",
			progress: 4,
		},
		{
			poID: "--------",
			supplier: "64 Zoo Lane",
			progress: 5,
		},
		{
			poID: "--------",
			supplier: "64 Zoo Lane",
			progress: 6,
		},
	];

	eventBus.on(SortingUpdate, (data) => {if (data.sortingID === "poID") sortByPIDs(data.sortingDirection);});
	eventBus.on(SortingUpdate, (data) => {if (data.sortingID === "supplier") sortByAddresses(data.sortingDirection);});

	function sortByPIDs(sortingDirection) {

	}

	function sortByAddresses(sortingDirection) {

	}

	function genPOs() {
		let poListings = [];
		for (const poListingData of POListingData) {
			poListings.push(<StyledPOListing 
				poID={poListingData.poID} 
				supplier={poListingData.supplier} 
				progress={poListingData.progress}
			/>);
		}
		return poListings;
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
