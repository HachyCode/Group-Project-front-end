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
		console.log("SUPPLIER: " + this.props.supplier);
		console.log("supplierObj: " + !!getSupplierObjFromName(this.props.supplier));
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
		//TODO: dynamically generate address from database
		switch(parseInt(this.props.supplier)){
		case -1:
			return(
				<div>
					<Address>
                            -
					</Address>
					<Address>
                            -
					</Address>
					<Address>
                            -
					</Address>
					<Address>
                            -
					</Address>
					<Address>
                            -
					</Address>
				</div>
			);

		case 0:
			return(
				<div>
					<Address>
                            Park House
					</Address>
					<Address>
                            15-19 Greenhill Crescent
					</Address>
					<Address>
                            Watford Business Park
					</Address>
					<Address>
                            Hertfordshire
					</Address>
					<Address>
                            WD18 8PH
					</Address>
				</div>
			);

		case 1:
			return(
				<div>
					<Address>
                            Unit 11, Spitfire Business
					</Address>
					<Address>
                            Park, Hawker Road,
					</Address>
					<Address>
                            Croydon,
					</Address>
					<Address>
                            ENGLAND
					</Address>
					<Address>
                            CR0 4WD
					</Address>
				</div>
			);

		case 2:
			return(
				<div>
					<Address>
                            BrainStorm Limited
					</Address>
					<Address>
                            Unit 1A, Mill Lane
					</Address>
					<Address>
                            GISBURN
					</Address>
					<Address>
                            Lancashire UK
					</Address>
					<Address>
                            BB7 4LN
					</Address>
				</div>
			);

		case 3:
			return(
				<div>
					<Address>
                            Weixinda Industrial Par
					</Address>
					<Address>
                            Caowei Xixiang Baoan
					</Address>
					<Address>
                            District, Shenzhen,
					</Address>
					<Address>
                            Guangdong
					</Address>
					<Address>
                            518128
					</Address>
				</div>
			);

		default:
			return(
				<div>{this.props.supplier}</div> 
			);
		}
	}
}

export default AddressStatements;