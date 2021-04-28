import axios from 'axios';
import Config from '../Config';
import {formatPOIDFromNum, numFromPOID} from '../Utillity';

//bad and naughty but this is for the presentation which is in just over 24 hours
const hardcodedSANamesAndIDs = {1: {
	saName: "SarahDunkley@G4U.com",
	saID: "DUN021",
},
2: {
	saName: "AdrianHidcote@G4U.com",
	saID: "HID001",
},
3: {
	saName: "AdrianHidcote@G4U.com",
	saID: "HID001",
},
4: {
	saName: "SarahDunkley@G4U.com",
	saID: "DUN021",
},
5: {
	saName: "SarahDunkley@G4U.com",
	saID: "DUN021",
},
6: {
	saName: "AdrianHidcote@G4U.com",
	saID: "HID001",
},
};

function getItemsInOrder(data) {
	let result = [];

	for (const item of data) {
		result.push({
			itemID: item["orderItemId"],
			quantity: item["orderItemQuantity"]
		});
	}

	return result;
}

function getDataFromDB() {
	//database stuff here
	//construct list

	//return gotten data (temporarily the default list)
	let defaultList =  [
		{
			poID: "0000 0001",
			supplier: "Bitmore Inc",
			progress: 6,
			orderItems: [
				{
					itemID: 3,
					quantity: 69
				}
			]
		},
		{
			poID: "0000 0002",
			supplier: "Cottage Toys",
			progress: 4,
		},
		{
			poID: "0000 0003",
			supplier: "BrainStorm Ltd",
			progress: 5,
		},
		{
			poID: "0000 0004",
			supplier: "Shenzhen Hosing Technology Development Co., Ltd.",
			progress: 2,
		},
		{
			poID: "0000 0005",
			supplier: "BrainStorm Ltd",
			progress: 3,
		},
		{
			poID: "0000 0006",
			supplier: "Bitmore Inc",
			progress: 1,
		},
		{
			poID: "0000 0007",
			supplier: null,
			progress: 0,
		},
	];

	return defaultList;

	let result = [];

	(async () => {
		await getDataFromDBAsync().then(
			(response) => {
				const data = response["data"];
				if (data) {
					for (const order of data) {
						result.push({
							poID: formatPOIDFromNum(order["orderId"]),
							supplier: order["orderSupplier"],
							progress: order["orderState"],
							orderItems: order["orderItem"] ? getItemsInOrder(order["orderItem"]) : []
						});
					}
				}
			}
		);//.catch(err => console.log(err));
	})();

	return result;
}

export async function getDataFromDBAsync(token) {
	return await axios.get(Config.serverLocation + "/orders", {
		headers: {
			Authorization: token ? token : sessionStorage.getItem(Config.userTokenSession)
		}
	});
}

export let promise = getDataFromDBAsync();

let POList = [];

export function buildPOListFromResponse(response) {
	const data = response["data"];
	if (data) {
		const newData = [];
		for (const order of data) {
			newData.push({
				poID: formatPOIDFromNum(order["orderId"]),
				supplier: order["orderSupplier"],
				progress: order["orderState"],
				orderItems: order["orderItems"] ? getItemsInOrder(order["orderItems"]) : [],
				saName: hardcodedSANamesAndIDs[order["orderId"]]["saName"],
				saID: hardcodedSANamesAndIDs[order["orderId"]]["saID"],
				johnAuthDate: order["JohnsonAuthDate"],
				annAuthDate: order["AnnAuthDate"]
			});
		}

		POList = newData;

		return POList;
	}
}

export function initialise(token) {
	promise = getDataFromDBAsync(token);
	return updatePOList(promise);
}

export function updatePOList(poListPromise, onCompleteFunc) {
	return poListPromise.then(
		(response) => {
			buildPOListFromResponse(response);
			
			if (onCompleteFunc) {
				onCompleteFunc(response, POList);
			}
		}
	);
}

export async function reInitialisePOList(onCompleteFunc) {
	promise = getDataFromDBAsync();
	updatePOList(promise, onCompleteFunc);
	return promise;
}

function updateByPOID(poID, newPO) {
	for (const po of POList) {
		if (po.poID === poID) {
			po.supplier = newPO.supplier;
			po.progress = newPO.progress;
		}
	}
}

function getByPOID(poID) {
	for (const po of POList) {
		if (po.poID === poID) {
			return po;
		}
	}
}

export function getQuantityOfItem(poID, itemID) {
	const po = getByPOID(poID);

	if (!po.orderItems) {
		po.orderItems = [];
	}

	for (const orderItem of po.orderItems) {
		if (orderItem.itemID === itemID) {
			return orderItem.quantity;
		}
	}

	return false;
}

export function updatePOItemListByID(poID, itemID, quantity) {
	const po = getByPOID(poID);
	let found = false;

	if (!po.orderItems) {
		po.orderItems = [];
	}

	for (const orderItem of po.orderItems) {
		if (orderItem.itemID === itemID) {
			orderItem.quantity = quantity;
			found = true;
			break;
		}
	}

	if (!found) {
		po.orderItems.push({
			itemID: itemID,
			quantity: quantity
		});
	}

	updateDBByID(poID);
}

function updateDBByID(poID) {
	//take data from POList
	const poObj = getByPOID(poID);

	const orderItems = [];

	for (const order of poObj.orderItems) {
		orderItems.push({
			"orderItemId": order["itemID"],
			"orderItemQuantity": order["quantity"].toString(),
		});
	}

	const requestObj = {
		"orderId": numFromPOID(poID),
		"orderSupplier": poObj.supplier,
		"orderState": poObj.progress.toString(),
		"orderItems": orderItems,
		"MinimumStockAmount": 30,
		"JohnsonAuthDate": poObj.johnAuthDate,
		"AnnAuthDate": poObj.annAuthDate

	};

	return axios.post(Config.serverLocation + "/orders/update", requestObj, {
		headers: {
			Authorization: sessionStorage.getItem(Config.userTokenSession)
		}
	});
}

export {POList, updateDBByID, updateByPOID, getByPOID};