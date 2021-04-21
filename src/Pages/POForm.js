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
import {getDataOfCurrentUser} from '../Data/UserData';
import Config from '../Config';
import {TopBoxImage} from '../Components/PageCSS/HomeCSS';
import Logo from '../Images/Logo/black_logo.png';
import {eventBus, POFormShouldUpdate} from '../EventBus';

const currentUser = getDataOfCurrentUser();
const annOrJason = currentUser.username === Config.annID || 
	currentUser.username === Config.jasonID || 
	Config.developerAccountIDs.includes(currentUser.username);

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

	componentDidMount = () => {
		eventBus.on(POFormShouldUpdate, this.update);
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

			console.log(JSON.stringify(this.selectedItems));
		}

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
				<Authorisation/>
			</div>
		);
	}
}

export default withRouter(POForm);
