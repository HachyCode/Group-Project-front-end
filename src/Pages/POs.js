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
import {POList, promise, reInitialisePOList, getDataFromDBAsync, buildPOListFromResponse} from '../Data/POList';
import AddPOButton from '../Components/AddPOButton/AddPOButton';

class POs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchFilter: null,
			poListingData: POList
		};
	}

	filter = (searchFilter) => {
		this.setState({searchFilter: searchFilter});
	}

	render = () => {
		const self = this;
		// const buildPOList = buildPOListFromResponse;

		// if (!this.state.poListingData) {
		// 	getDataFromDBAsync().then(
		// 		(response) => {
		// 			console.log("set state");
		// 			self.setState({poListingData: buildPOList(response)});
		// 		}
		// 	);
		// 	// reInitialisePOList((response, poList) => {
		// 	// 	self.setState({poListingData: poList});
		// 	// });
		
		// //this.setState({poListingData: POList});
		// }
		return (
			<div>
				<MainBody>
					<FilterTop>
						<StyledSearchBar clicked={this.filter}/>
						<SearchRow>
							{/*Add div bettween magic buttons*/}
							<FirstLabelBox>
								<FirstLabel name="PO ID" sortingID="poID"/>
							</FirstLabelBox>
							<SecondLeftLabelBox>
								<SecondLeftLabel name="Supplier" sortingID="supplier"/>
							</SecondLeftLabelBox>
							<SpacedLabel contents="All data"/>
							<SpacedLabel contents="John"/>
							<SpacedLabel contents="Ann"/>
							<SpacedLabel contents="Send"/>
							<SpacedLabel contents="Accepted"/>
							<SpacedLabel contents="Delivered"/>
						</SearchRow>
					</FilterTop>
					<StyledPOListingArea poListingData={this.state.poListingData} searchFilter={this.state.searchFilter}/>
					<AddPOButton updatePage={() => {self.setState({});}} contents="+"/>
				</MainBody>
			</div>
		);
	}
}

export default POs;
