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
			filler: 0
		};
	}

	componentDidMount() {
		eventBus.on(SortingUpdate, (data) => {
			if (data.sortingID === "poID") {
				this.sortPIDs(data.sortingDirection);
				this.updateBars();
			}
		});
		eventBus.on(SortingUpdate, (data) => {
			if (data.sortingID === "supplier") {
				this.sortSuppliers(data.sortingDirection);
				this.updateBars();
			}
		});
	}

	generatePOs = () => {
		let poListings = [];
		for (const poListingData of this.state.poListingData) {
			poListings.push(<StyledPOListing 
				poID={poListingData.poID} 
				supplier={poListingData.supplier} 
				progress={poListingData.progress}
				key={this.state.poListingData.indexOf(poListingData)}
			/>);
		}
		return poListings;
	}

	sortPIDs = (sortingDirection) => {
		console.log("PIDS");
		let newListingData = this.state.poListingData.sort((a, b) => {
			//adapted from https://stackoverflow.com/a/45544166
			return a.poID.localeCompare(b.poID);
		});

		if (sortingDirection === descending) {
			newListingData.reverse();
		}

		this.setState({
			poListingData: newListingData,
			filler: this.state.filler + 1
		});
	}

	sortSuppliers = (sortingDirection) => {
		console.log("suppliers - " + sortingDirection);
		let newListingData = this.state.poListingData.sort((a, b) => {
			//adapted from https://stackoverflow.com/a/45544166
			return a.supplier.localeCompare(b.supplier);
		});

		if (sortingDirection === descending) {
			console.log("inverse");
			newListingData.reverse();
		}

		this.setState({
			poListingData: newListingData,
			filler: this.state.filler + 1
		});
	}

	updateBars = () => {
		eventBus.emit(StatusBarShouldUpdate);
	}

	render = () => {
		return (<div>
			{this.generatePOs()}
		</div>);
	}
}

export default POListingArea;