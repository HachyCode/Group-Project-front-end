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
	FilterTop,
	AddPOButton
} from '../Components/PageCSS/POsCSS';
import {POList} from '../Data/POList';

class POs extends React.Component {
	addPOButtonPress = () => {
		const lastID = POList[POList.length - 1].poID;
		//w3 page talks about replace as ifit modifies the string that it is being used on so put it
		//in a separate variable to be safe.
		let rawNumID = (parseInt(lastID.replace(" ", "")) + 1).toString();

		//pad with 0s
		while (rawNumID.length < 8) {
			rawNumID = "0" + rawNumID;
		}

		//add the space back
		const finalID = rawNumID.slice(0, 4) + " " + rawNumID.slice(4);

		POList.push({
			poID: finalID,
			supplier: "-",
			progress: 0,
		});

		this.setState({});
	}

	render = () => {
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
					<StyledPOListingArea poListingData={POList}/>
					<AddPOButton onClick={this.addPOButtonPress}>Add</AddPOButton>
				</MainBody>
			</div>
		);
	}
}

export default POs;
