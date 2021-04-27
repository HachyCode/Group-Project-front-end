import React from 'react';
import {StyledPOListing} from './POListingAreaCSS';
import {eventBus, SortingUpdate, StatusBarShouldUpdate} from '../../EventBus';
import {ascending, descending, unsorted} from '../SortingMagicButton/SortingMagicButton';
import Config from '../../Config';
import { hasAnyPermissions, hasPermission, OkOrder, SeeActivePOs } from '../../Permissions';

class POListingArea extends React.Component {
	constructor(props) {
		super(props);

		this.props = props;

		this.state = {
			poListingData: this.props.poListingData,
			searchFilter: null,
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
			const poID = poListingData.poID;
			const supplier = poListingData.supplier;
			const permissions = parseInt(sessionStorage.getItem(Config.currUserPermissions));

			if (poListingData.progress >= 1 && !hasAnyPermissions(permissions, OkOrder, SeeActivePOs)) {
				continue;
			}

			if (this.props.searchFilter && 
				!poID.toLowerCase().includes(this.props.searchFilter.toLowerCase()) &&
				(supplier ? !supplier.toLowerCase().includes(this.props.searchFilter.toLowerCase()) : true)) {
				continue;
			}

			poListings.push(<StyledPOListing 
				poID={poID} 
				supplier={supplier} 
				progress={poListingData.progress}
				orderItems={poListingData.orderItems}
				saName={poListingData.saName}
				saID={poListingData.saID}
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
				//it will error if we give it null for supplier (which it is until one is selected so we replace it with '-')
				const aSupplier = a.supplier ? a.supplier : "-";
				const bSupplier = b.supplier ? b.supplier : "-";
				return aSupplier.localeCompare(bSupplier);
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