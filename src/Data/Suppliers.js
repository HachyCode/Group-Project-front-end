import axios from 'axios';
import { Supplier } from '../Components/AddressBar/AddressBarCSS';
import Config from '../Config';

function getSuppliersFromDB() {
	return [
		{supplierID: 0, supplierName: 'Bitmore Inc', supplierAbbrev: 'BI'},
		{supplierID: 1, supplierName: 'Cottage Toys', supplierAbbrev: 'CT'},
		{supplierID: 2, supplierName: 'BrainStorm Ltd', supplierAbbrev: 'BS'},
		{supplierID: 3, supplierName: 'Shenzhen Hosing Technology Development Co., Ltd', supplierAbbrev: 'SH'},
	];
}

export let Suppliers = [];

export function initialiseSuppliers(token) {
	return axios.get(Config.serverLocation + "/suppliers", {headers: {
		Authorization: token ? token : sessionStorage.getItem(Config.userTokenSession)
	}}).then((response) => {
		const data = response["data"];

		if (data) {
			Suppliers = [];

			for (const responseObj of data) {
				Suppliers.push({
					supplierID: responseObj["supplierID"],
					supplierName: responseObj["supplierName"],
					supplierAbbrev: responseObj["supplierAbbrev"],
					supplierAddress: responseObj["supplierAddress"]
				});
			}
		}
	});
}

//TODO: RENAME ME TO "getSupplierIDFromName"
export function getSupplierFromName(name) {
	for (const supplier of Suppliers) {
		if (supplier.supplierName === name) {
			return supplier.supplierID;
		}
	}
}

export function getSupplierObjFromName(name) {
	for (const supplier of Suppliers) {
		if (supplier.supplierName === name) {
			return supplier;
		}
	}
}

export function getSupplierFromID(id) {
	for (const supplier of Suppliers) {
		if (supplier.supplierID === id) {
			return supplier.supplierName;
		}
	}
}

export function getSupplierObjByID(id) {
	for (const supplier of Suppliers) {
		if (supplier.supplierID === id) {
			return supplier;
		}
	}	
}

export function getSupplierAddressFromName(name) {
	for (const supplier of Suppliers) {
		if (supplier.supplierName === name) {
			return supplier.supplierAddress;
		}
	}
}

export function getSupplierFromAbbrev(abbrev) {
	for (const supplier of Suppliers) {
		if (supplier.supplierAbbrev === abbrev) {
			return supplier.supplierName;
		}
	}
}

export function getSupplierAbbrevFromName(name) {
	for (const supplier of Suppliers) {
		if (supplier.supplierName === name) {
			return supplier.supplierAbbrev;
		}
	}
}