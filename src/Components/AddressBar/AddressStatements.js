import React from 'react';
import {Address} from './AddressBarCSS';
import {getSupplierAddressFromName, getSupplierObjFromName} from '../../Data/Suppliers';

class AddressStatements extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}
	render(){
		const result = [];

		if (this.props.supplier === -1) {
			result.push(<Address>No address selected</Address>);
			return result;
		}

		const address = getSupplierObjFromName(this.props.supplier).supplierAddress;

		if (address) {
			for (const addressComponent of address.split(";")) {
				if (addressComponent) {
					result.push(<Address>{addressComponent}</Address>);
				}
			}
		} else {
			result.push(<Address>Address unknown</Address>);
		}

		return result;
	}
}

export default AddressStatements;