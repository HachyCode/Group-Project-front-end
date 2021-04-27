import React from 'react';
import Address from '../Components/AddressBar/AddressBar';
import ThreeButtons from '../Components/ThreeButtons/ThreeButtons';
import MainPoInfo from '../Components/MainPoInfo/MainPoInfo';
import {
	MainInfoBox, 
	TopMainBody, 
	FilterTop
} from '../Components/PageCSS/PoFormCSS';
import Orders from '../Components/PoOrders/PoOrders';
import Totals from '../Components/PoFormTotals/PoFormTotals';
import Authorisation from '../Components/PoAuthorisation/Authorisation';
import {
	SearchRow,
	SpacedLabel,
	FirstLabel,
	SecondLeftLabel,
	StyledPOListingArea,
	FirstLabelBox,
	SecondLeftLabelBox,
} from '../Components/PageCSS/POsCSS';
import {withRouter} from 'react-router';
import {getDataOfCurrentUser, currentUser} from '../Data/UserData';
import Config from '../Config';
import {TopBoxImage} from '../Components/PageCSS/HomeCSS';
import Logo from '../Images/Logo/black_logo.png';
import {eventBus, POFormSend, POFormShouldUpdate, POFormSave} from '../EventBus';
import {updatePOItemListByID} from '../Data/POList';
import {hasPermission, OkOrder} from '../Permissions';
import axios from 'axios';
import { numFromPOID } from '../Utillity';

let annOrJason = null;

// currentUser.staffID === Config.annID || 
// 	currentUser.staffID === Config.jasonID || 
// 	Config.developerAccountIDs.includes(currentUser.staffID);

class POForm extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		// {itemID, quantity}
		this.selectedItems = [];

		this.POListingData = false;

		this.state = {
			filter: false,
		};

		if (this.props.location.state) {
			this.POListingData = [ 
				{
					poID: this.props.location.state.poID,
					supplier: this.props.location.state.supplier,
					progress: this.props.location.state.progress,
					orderItems: this.props.location.state.orderItems
				}
			];
		} else {
			this.POListingData = [
				{
					poID: "0000 0007",
					supplier: "-",
					progress: 0,
				},
			];
		}

		this.updateItemSelection.bind(this);
	}

	update = () => {
		this.setState({});
	}

	genPDF = () => {
		axios.get(Config.serverLocation + "/pdf/" + numFromPOID(this.props.location.state.poID), {headers: {
			Authorization: sessionStorage.getItem(Config.userTokenSession)
		}});
	}

	componentDidMount = () => {
		const self = this;
		currentUser.then((response) => {
			const permissions = response["data"]["Permissions"];
			annOrJason = hasPermission(permissions, OkOrder);
			// staffID === Config.annID || 
			// 	staffID === Config.jasonID ||
			// 	Config.developerAccountIDs.includes(staffID);
			self.setState({});
		});

		eventBus.on(POFormShouldUpdate, this.update);
		eventBus.on(POFormSave, this.genPDF);
	}

	componentWillUnmount = () => {
		eventBus.off(POFormShouldUpdate, this.update);
	}

	setCategoriesFilter = (filter) => {
		this.setState({
			filter: filter
		});
	}

	updateItemSelection = (itemID, price, quantity) => {
		let found = false;
		for (const item of this.selectedItems) {
			if (item.itemID === itemID) {
				item.price = price;
				item.quantity = quantity;
				found = true;
			}
		}

		if (!found) {
			this.selectedItems.push({
				itemID: itemID,
				price: price,
				quantity: quantity
			});
		}

		updatePOItemListByID(this.POListingData[0].poID, itemID, quantity);

		this.setState({});
	}

	render = ()  => {
		return (
			<div>
				<TopMainBody>
					<FilterTop>
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
					<StyledPOListingArea poListingData={this.POListingData}/>
				</TopMainBody>
				<ThreeButtons poItem={this.POListingData[0]}/>
				<MainInfoBox>
					<TopBoxImage alt="logo" src={Logo}/>
					<MainPoInfo poItem={this.POListingData[0]} ID={this.props.location.state.poID}/>
				</MainInfoBox>
				<Address 
					updateFilter={this.setCategoriesFilter} 
					poItem={this.POListingData[0]} 
					OrderSupplier={this.props.location.state.supplier}
				/>
				<Orders 
					supplierFilter={this.state.filter} 
					poItem={this.POListingData[0]} 
					updateItemSelection={this.updateItemSelection}
				/>
				<Totals selectedItems={this.selectedItems}/>
				{annOrJason ? <Authorisation poItem={this.POListingData[0]}/> : null}
			</div>
		);
	}
}

export default withRouter(POForm);
