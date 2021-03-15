import React from 'react';
import {StyledPOListing} from './POListingAreaCSS';
import {eventBus, SortingUpdate, StatusBarShouldUpdate} from '../../EventBus';
import {ascending, descending, unsorted} from '../SortingMagicButton/SortingMagicButton';

class POListingArea extends React.Component {
	constructor(props) {
		super(props);

		this.props = props;

		this.state = {
			poListingData: this.props.poListingData,
		};
	}

	componentDidMount() {
		eventBus.on(SortingUpdate, this.sortPIDs);
		eventBus.on(SortingUpdate, this.sortSuppliers);
	}

	componentWillUnmount() {
		eventBus.off(SortingUpdate, this.sortPIDs);
		eventBus.off(SortingUpdate, this.sortSuppliers);
	}

	generatePOs = () => {
		let poListings = [];
		for (let i = 0; i < this.state.poListingData.length; i++) {
			const poListingData = this.state.poListingData[i];
			const index = this.state.poListingData.indexOf(poListingData);
			poListings.push(<StyledPOListing 
				poID={poListingData.poID} 
				supplier={poListingData.supplier} 
				progress={poListingData.progress}
				barID={index}
				key={index}
			/>);
		}
		return poListings;
	}

	sortPIDs = (data) => {
		if (data.sortingID === "poID") {
			let newListingData = this.state.poListingData.sort((a, b) => {
				//adapted from https://stackoverflow.com/a/45544166
				return a.poID.localeCompare(b.poID);
			});

			if (data.sortDirection === ascending) {
				newListingData.reverse();
			}

			this.setState({
				poListingData: newListingData,
			});
			this.updateBars();
		}
	}

	sortSuppliers = (data) => {
		if (data.sortingID === "supplier") {
			let newListingData = this.state.poListingData.sort((a, b) => {
				//adapted from https://stackoverflow.com/a/45544166
				return a.supplier.localeCompare(b.supplier);
			});

			if (data.sortDirection === descending) {
				newListingData.reverse();
			}

			this.setState({
				poListingData: newListingData,
			});
			this.updateBars();
		}
	}

	updateBars = () => {
		eventBus.emit(StatusBarShouldUpdate, {poListingData: this.state.poListingData});
	}

	render = () => {
		return (<div>
			{this.generatePOs()}
		</div>);
	}
}

export default POListingArea;