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

//TODO: Separate Address and supplier box
class AddressBar extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			supplier: -1
		};
		this.handleChange = this.handleChange.bind(this);
		console.log(this.props.poItem.supplier);
	}

	handleChange(e) {
		console.log("Supplier Selected!!");
		this.setState({ supplier: getSupplierFromName(e.target.value) });
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
								value={this.props.poItem.supplierName ? this.props.poItem.supplierName : this.state.supplier} 
								onChange={this.handleChange} 
								disabled={!!this.props.poItem.supplier}
							>
								<option value={-1} disabled>Select Supplier</option>
								{Suppliers.map((option) => (
									<option value={option.supplierName}>{option.supplierName}</option>
								))}
							</Select>
						</Supplier>
						<AddressStatements supplier={this.state.supplier}/>
					</AddressBox>

				</AddressDiv>
			</div>
		);
	}
}

export default AddressBar;
