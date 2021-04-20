function getSuppliersFromDB() {
	return [
		{supplierID: 0, supplierName: 'Bitmore Inc', supplierAbbrev: 'BI'},
		{supplierID: 1, supplierName: 'Cottage Toys', supplierAbbrev: 'CT'},
		{supplierID: 2, supplierName: 'BrainStorm Ltd', supplierAbbrev: 'BS'},
		{supplierID: 3, supplierName: 'Shenzhen Hosing Technology Development Co., Ltd', supplierAbbrev: 'SH'},
	];
}

export const Suppliers = getSuppliersFromDB();

//TODO: RENAME ME TO "getSupplierIDFromName"
export function getSupplierFromName(name) {
	for (const supplier of Suppliers) {
		if (supplier.supplierName === name) {
			return supplier.supplierID;
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

export function getSupplierFromAbbrev(abbrev) {
	for (const supplier of Suppliers) {
		if (supplier.supplierAbbrev === abbrev) {
			return supplier.supplierName;
		}
	}
}