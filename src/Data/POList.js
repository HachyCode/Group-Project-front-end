import axios from 'axios';
import Config from '../Config';
import {formatPOIDFromNum, numFromPOID} from '../Utillity';

function getItemsInOrder(data) {
	let result = [];

	for (const item of data) {
		result.push({
			itemID: item["itemId"],
			quantity: item["itemQuantity"]
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

export async function getDataFromDBAsync() {
	return await axios.get(Config.serverLocation + "/orders", {
		headers: {
			Authorization: sessionStorage.getItem(Config.userTokenSession)
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
				orderItems: order["orderItem"] ? getItemsInOrder(order["orderItem"]) : []
			});
		}

		POList = newData;

		return POList;
	}
}

export function initialise() {
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

	//updateDBByID(poID);
}

function updateDBByID(poID) {
	//take data from POList
	const poObj = getByPOID(poID);
	const requestObj = {
		"orderId": numFromPOID(poID),

	};

	return;

	return axios.post(Config.serverLocation + "/orders/update", requestObj, {
		headers: {
			Authorization: sessionStorage.getItem(Config.userTokenSession)
		}
	});
}

export {POList, updateDBByID, updateByPOID, getByPOID};