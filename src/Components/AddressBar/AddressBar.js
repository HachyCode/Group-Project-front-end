import React from 'react';
import {
	Address, 
	AddressBox, 
	AddressDiv, 
	Supplier, 
	Select
} from './AddressBarCSS';
import AddressStatements from './AddressStatements';

const options = [
	{ value: 0, label: 'Select Supplier'},

	{ value: 1, label: 'Bitmore Inc'},
	{ value: 2, label: 'Cottage Toys'},
	{ value: 3, label: 'BrainStorm Ltd'},
	{ value: 4, label: 'Shenzhen Hosing Technology Development Co., Ltd'},
];
class AddressBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			supplier: 0
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		console.log("Supplier Selected!!");
		this.setState({ supplier: e.target.value });
	}

	render() {
		return (
			<div>{/*Viktorija*/}
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
							<Select value={this.state.supplier} onChange={this.handleChange}>
								{options.map((option) => (
									<option value={option.value}>{option.label}</option>
								))}
							</Select>
						</Supplier>
						<AddressStatements supplier = {this.state.supplier}/>
					</AddressBox>

				</AddressDiv>
			</div>
		);
	}
}

export default AddressBar;
