import React from 'react';
import {
	MainBody,
	SearchRow,
	StyledSearchBar,
	SpacedLabel,
	FirstLabel,
	SecondLeftLabel,
	StyledPOListingArea,
	FirstLabelBox,
	SecondLeftLabelBox,
	FilterTop
} from '../Components/PageCSS/POsCSS';

function POs() {
	let POListingData = [
		{
			poID: "0000 0001",
			supplier: "Bitmore Inc",
			progress: 6,
		},
		{
			poID: "0000 0002",
			supplier: "Cottage Toys",
			progress: 4,
		},
		{
			poID: "0000 0003",
			supplier: "BrainStorm Ltd",
			progress: 5,
		},
		{
			poID: "0000 0004",
			supplier: "Shenzhen Hosing Technology Development Co., Ltd.",
			progress: 2,
		},
		{
			poID: "0000 0005",
			supplier: "BrainStorm Ltd",
			progress: 3,
		},
		{
			poID: "0000 0006",
			supplier: "Bitmore Inc",
			progress: 1,
		},
		{
			poID: "0000 0007",
			supplier: "-",
			progress: 0,
		},
	];

	return (
		<div>
			<MainBody>
				<FilterTop>
					<StyledSearchBar/>
					<SearchRow>
						{/*Add div bettween magic buttons*/}
						<FirstLabelBox>
							<FirstLabel name="PO ID" sortingID="poID"/>
						</FirstLabelBox>
						<SecondLeftLabelBox>
							<SecondLeftLabel name="Supplier" sortingID="supplier"/>
						</SecondLeftLabelBox>
						<SpacedLabel contents="All data"/>
						<SpacedLabel contents="Jason"/>
						<SpacedLabel contents="Ann"/>
						<SpacedLabel contents="Send"/>
						<SpacedLabel contents="Accepted"/>
						<SpacedLabel contents="Delivered"/>
					</SearchRow>
				</FilterTop>
				<StyledPOListingArea poListingData={POListingData}/>
			</MainBody>
		</div>
	);
}

export default POs;
