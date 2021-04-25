import axios from 'axios';
import Config from '../Config';
import {formatPOIDFromNum} from '../Utillity';

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

async function getDataFromDBAsync() {
	return await axios.get(Config.serverLocation + "/orders", {
		headers: {
			Authorization: sessionStorage.getItem(Config.userTokenSession)
		}
	});
}

let POList = [];

export function initialise() {
	getDataFromDBAsync().then(
		(response) => {
			const data = response["data"];
			if (data) {
				for (const order of data) {
					POList.push({
						poID: formatPOIDFromNum(order["orderId"]),
						supplier: order["orderSupplier"],
						progress: order["orderState"],
						orderItems: order["orderItem"] ? getItemsInOrder(order["orderItem"]) : []
					});
				}
			}
		}
	);
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

function updateDB() {
	//take data from POList
}

export {POList, updateDB, updateByPOID, getByPOID};