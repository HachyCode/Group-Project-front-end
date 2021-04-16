import React from 'react';
import {
	Address, 
	AddressBox, 
	AddressDiv, 
	Supplier, 
	Select
} from './AddressBarCSS';
import AddressStatements from './AddressStatements';
import {Suppliers, getSupplierFromName} from '../../Data/Suppliers';
import {eventBus, POFormDone, POFormShouldUpdate, StatusBarShouldUpdate} from '../../EventBus';
import {updateByPOID} from '../../Data/POList';

const options = [
	{ value: 0, label: 'Select Supplier'},

	{ value: 1, label: 'Bitmore Inc'},
	{ value: 2, label: 'Cottage Toys'},
	{ value: 3, label: 'BrainStorm Ltd'},
	{ value: 4, label: 'Shenzhen Hosing Technology Development Co., Ltd.'},
];
class AddressBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			supplier: this.props.OrderSupplier ? this.props.OrderSupplier : -1
		};
	}

	donePressed = () => {
		if (this.state.supplier !== -1) {
			this.props.poItem.supplier = this.state.supplier;
			
			//0 is falsy so this should work for that as well
			if (!this.props.poItem.progress) {
				this.props.poItem.progress = 1;
			}

			updateByPOID(this.props.poItem.poID, this.props.poItem);
			//tell POForm product box to update the bar
			eventBus.emit(POFormShouldUpdate);
			eventBus.emit(StatusBarShouldUpdate, {poListingData: [this.props.poItem]});
		}
	}

	componentDidMount = () => {
		eventBus.on(POFormDone, this.donePressed);
	}

	componentWillUnmount = () => {
		eventBus.off(POFormDone, this.donePressed);
	}

	handleChange = (e) => {
		console.log("Supplier Selected!!");
		this.setState({ supplier: e.target.value });
	}

	render() {
		return (
			<div className={this.props.className}>{/*Viktorija*/}
				<AddressDiv>

					<AddressBox>
						<Address>Gadgets for you</Address>
						<Address>Park Crescent</Address>
						<Address>Peterborough</Address>
						<Address>Cambridgeshire</Address>
						<Address>PE1 4DZ</Address>
					</AddressBox>
                

					<AddressBox>
						<Supplier>
							<Select 
								value={this.state.supplier}
								onChange={this.handleChange} 
								disabled={!!this.props.poItem.supplier}
							>
								<option value={-1} disabled>Select Supplier</option>
								{Suppliers.map((option) => (
									<option value={option.supplierName}>{option.supplierName}</option>
								))}
							</Select>
						</Supplier>
						<AddressStatements supplier={this.state.supplier === -1 ? -1 : getSupplierFromName(this.state.supplier)}/>
					</AddressBox>

				</AddressDiv>
			</div>
		);
	}
}

export default AddressBar;
