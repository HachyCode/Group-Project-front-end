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
import {POList} from '../Data/POList';
import AddPOButton from '../Components/AddPOButton/AddPOButton';

class POs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchFilter: null,
		};
	}

	filter = (searchFilter) => {
		this.setState({searchFilter: searchFilter});
	}

	render = () => {
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
							<SpacedLabel contents="Jason"/>
							<SpacedLabel contents="Ann"/>
							<SpacedLabel contents="Send"/>
							<SpacedLabel contents="Accepted"/>
							<SpacedLabel contents="Delivered"/>
						</SearchRow>
					</FilterTop>
					<StyledPOListingArea poListingData={POList} searchFilter={this.state.searchFilter}/>
					<AddPOButton updatePage={() => {this.setState({});}} contents="+"/>
				</MainBody>
			</div>
		);
	}
}

export default POs;
