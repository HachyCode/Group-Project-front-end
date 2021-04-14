function getSuppliersFromDB() {
	return [
		{supplierID: 0, supplierName: 'Bitmore Inc'},
		{supplierID: 1, supplierName: 'Cottage Toys'},
		{supplierID: 2, supplierName: 'BrainStorm Ltd'},
		{supplierID: 3, supplierName: 'Shenzhen Hosing Technology Development Co., Ltd'},
	];
}

export const Suppliers = getSuppliersFromDB();

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