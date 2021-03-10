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
	StyledPOListingArea,
} from '../Components/PageCSS/POsCSS';
import {eventBus, SortingUpdate} from '../EventBus';

function POs() {
	let POListingData = [
		{
			poID: "5234abcd",
			supplier: "64 Zoo Lane",
			progress: 1,
		},
		{
			poID: "2234abcd",
			supplier: "65 Zoo Lane",
			progress: 2,
		},
		{
			poID: "3234abcd",
			supplier: "66 Zoo Lane",
			progress: 3,
		},
		{
			poID: "1234abcd",
			supplier: "67 Zoo Lane",
			progress: 4,
		},
		{
			poID: "9234abce",
			supplier: "68 Zoo Lane",
			progress: 5,
		},
		{
			poID: "6234abcd",
			supplier: "69 Zoo Lane",
			progress: 6,
		},
		{
			poID: "7234abcd",
			supplier: "64 Aoo Lane",
			progress: 1,
		},
	];

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
						<FirstLabel name="PO ID" sortingID="poID"/>
						<SecondLeftLabel name="Supplier" sortingID="supplier"/>
						<SpacedLabel contents="All data"/>
						<SpacedLabel contents="Jason"/>
						<SpacedLabel contents="Ann"/>
						<SpacedLabel contents="Send"/>
						<SpacedLabel contents="Accepted"/>
						<SpacedLabel contents="Delivered"/>
					</SearchRow>
					<StyledPOListingArea poListingData={POListingData}/>
					{/*genPOs()*/}
				</POSelectArea>
			</MainBody>
		</div>
	);
}

export default POs;
