import error from '../Images/CategorieItems/404error.png';
import axios from 'axios';
import Config from '../Config';
import {numFromPOID} from '../Utillity';

//future me: don't set this to async or you break categories.
import Fan from '../Images/CategorieItems/Fan.jpg';
import Lego from '../Images/CategorieItems/Lego.jpg';
import Klikbot from '../Images/CategorieItems/Klikbot.jpg';
import Nerf from '../Images/CategorieItems/Nerf.jpg';
import Olaf from '../Images/CategorieItems/Olaf.jpg';
import Pinball from '../Images/CategorieItems/Pinball.jpg';
import Polaroid from '../Images/CategorieItems/Polaroid.jpg';
import PowerBank from '../Images/CategorieItems/PowerBank.jpg';
import Spider from '../Images/CategorieItems/Spider.jpg';
import StarWars from '../Images/CategorieItems/StarWars.jpg';

const images = [PowerBank, PowerBank, PowerBank, Spider, Fan, StarWars, Polaroid, Nerf, Klikbot, Pinball, Olaf, Lego];

function getCategories() {
	const result = [
		{
			image: PowerBank,
			productCode: "PWR41",
			itemName: "USB Power Bank 10000mAh",
			amount: 58,
			itemID: 1,
			categoriesData: [
				{
					supplierName: "BI",
					cost: "£9.95",
					deliveryTime: 5,
				},
				{
					supplierName: "BS",
					cost: "£9.95",
					deliveryTime: 5,
				},
			]
		},

		{
			image: PowerBank,
			productCode: "PWR43",
			itemName: "USB Power Bank 20000mAh",
			amount: 154,
			itemID: 2,
			categoriesData: [
				{
					supplierName: "BI",
					cost: "£18.99",
					deliveryTime: 5,
				},
				{
					supplierName: "BS",
					cost: "£18.64",
					deliveryTime: 5,
				},
			]
		},

		{
			image: PowerBank,
			productCode: "PWR44",
			itemName: "USB Power Bank 25800mAh",
			amount: 21,
			itemID: 3,
			categoriesData: [
				{
					supplierName: "BI",
					cost: "£19.99",
					deliveryTime: 5,
				},
				{
					supplierName: "BS",
					cost: "£19.00",
					deliveryTime: 5,
				},
			]
		},

		{
			image: Spider,
			productCode: "SC01",
			itemName: "Spider Catcher",
			amount: 93,
			itemID: 4,
			categoriesData: [
				{
					supplierName: "SH",
					cost: "£1.58",
					deliveryTime: 20,
				},
				{
					supplierName: "BS",
					cost: "£1.99",
					deliveryTime: 3,
				},
			]
		},

		{
			image: Fan,
			productCode: "PPF03",
			itemName: "Portable Personal Fan",
			amount: 104,
			itemID: 5,
			categoriesData: [
				{
					supplierName: "BI",
					cost: "£5.65",
					deliveryTime: 5,
				},
				{
					supplierName: "SH",
					cost: "£4.80",
					deliveryTime: 15,
				},
			]
		},

		{
			image: StarWars,
			productCode: "SW08",
			itemName: "Star Wars USB Cup Warmer BB-8",
			amount: 37,
			itemID: 6,
			categoriesData: [
				{
					supplierName: "BS",
					cost: "£10.99",
					deliveryTime: 5,
				},
				{
					supplierName: "BI",
					cost: "£9.99",
					deliveryTime: 4,
				},
				{
					supplierName: "SH",
					cost: "£9.85",
					deliveryTime: 25,
				},
			]
		},

		{
			image: Polaroid,
			productCode: "POL03",
			itemName: "Polaroid Play 3D Pen",
			amount: 199,
			itemID: 7,
			categoriesData: [
				{
					supplierName: "SH",
					cost: "£22.00",
					deliveryTime: 25,
				},
				{
					supplierName: "BS",
					cost: "£28.59",
					deliveryTime: 4,
				},
			]
		},

		{
			image: Nerf,
			productCode: "NRF10",
			itemName: "Nerf N-Strike Elite Disruptor",
			amount: 173,
			itemID: 8,
			categoriesData: [
				{
					supplierName: "BI",
					cost: "£12.99",
					deliveryTime: 12,
				},
				{
					supplierName: "SH",
					cost: "£10.50",
					deliveryTime: 30,
				},
			]
		},

		{
			image: Klikbot,
			productCode: "KST01",
			itemName: "KLIKBOT Studio Thud",
			amount: 42,
			itemID: 9,
			categoriesData: [
				{
					supplierName: "BS",
					cost: "£9.92",
					deliveryTime: 12,
				},
				{
					supplierName: "SH",
					cost: "£28.59",
					deliveryTime: 30,
				},
			]
		},

		{
			image: Pinball,
			productCode: "PIN00",
			itemName: "Plan Toys Pinball",
			amount: 10,
			itemID: 10,
			categoriesData: [
				{
					supplierName: "BI",
					cost: "£40.00",
					deliveryTime: 5,
				},
				{
					supplierName: "CT",
					cost: "£38.25",
					deliveryTime: 6,
				},
			]
		},

		{
			image: Olaf,
			productCode: "FP59",
			itemName: "Funko Pop! Disney: Frozen 2 - Olaf",
			amount: 23,
			itemID: 11,
			categoriesData: [
				{
					supplierName: "SH",
					cost: "£7.50",
					deliveryTime: 5,
				},
				{
					supplierName: "CT",
					cost: "£7.10",
					deliveryTime: 6,
				},
			]
		},

		{
			image: Lego,
			productCode: "LEX95",
			itemName: "LEGO Classic Bricks and Ideas - 11001",
			amount: 255,
			itemID: 12,
			categoriesData: [
				{
					supplierName: "SH",
					cost: "£7.68",
					deliveryTime: 10,
				},
				{
					supplierName: "CT",
					cost: "£8.00",
					deliveryTime: 5,
				},
			]
		},

		{
			image: PowerBank,
			productCode: "PWR50",
			itemName: "1.8m USB-C  Cable",
			amount: 255,
			itemID: 12,
			categoriesData: [
				{
					supplierName: "CT",
					cost: "£9.95",
					deliveryTime: 5,
				}
			]
		}


	];

	//REMOVEME when the data for products is done on backend
	return result;

	return getCategoriesAsync();
}

function getCategoriesAsync(token) {
	return axios.get(Config.serverLocation +  "/products", {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token ? token : sessionStorage.getItem(Config.userTokenSession)
		}
	});
}

export function genCategoriesData(categoriesData) {
	const result = [];

	for (const data of categoriesData) {
		result.push({
			supplierName: data["supplierName"],
			cost: data["supplierCost"],
			deliveryTime: data["supplierDeliveryTime"],
		});
	}

	return result;
}

export function getResultsWithPromise(promise) {
	return promise.then(
		(response) => {
			const result = [];
			let image = 0;
			for (const item of response["data"]) {
				result.push({
					image: images[image] ? images[image] : error,
					productCode: item["productCode"],
					itemName: item["productName"],
					amount: item["productQuantity"] ? item["productQuantity"] : 0,
					itemID: image + 1,
					categoriesData: genCategoriesData(item["supplierData"])
				});

				image++;
			}

			return result;
		}
	);
}

export let CategoriesList = getCategories();

export function initialiseCategories(token) {
	const promise = getCategoriesAsync(token);
	getResultsWithPromise(promise).then(
		(result) => {
			CategoriesList = result;
		}
	);

	return promise;
}

export function getPriceBySupplierForCategory(categoryID, supplierID) {
	for (const item of CategoriesList) {
		if (item.productCode === categoryID) {
			for (const catData of item.categoriesData) {
				if (catData.supplierName === supplierID) {
					return catData.cost;
				}
			}
		}
	}

	return false;
}

export function getQuantityBySupplierForCategory(categoryID, supplierID) {
	for (const item of CategoriesList) {
		if (item.productCode === categoryID) {
			for (const catData of item.categoriesData) {
				if (catData.supplierName === supplierID) {
					return catData.cost;
				}
			}
		}
	}

	return false;
}

export function getCategoryByItemID(categoryItemID) {
	let theId = numFromPOID(categoryItemID);

	for (const item of CategoriesList) {
		if (item.itemID === theId) {
			return item;
		}
	}

	return false;
}

export function getNumCategoryIDByProductCode(productCode) {
	for (const item of CategoriesList) {
		if (item.productCode === productCode) {
			return item.itemID;
		}
	}
}