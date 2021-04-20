import error from '../Images/CategorieItems/404error.png';
import axios from 'axios';
import Config from '../Config';

//future me: don't set this to async or you break categories.
function getCategories() {
	const result = [
		{
			image: error,
			productCode: "PWR41",
			itemName: "USB Power Bank 10000mAh",
			amount: "58",
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
			image: error,
			productCode: "PWR43",
			itemName: "USB Power Bank 20000mAh",
			amount: "154",
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
			image: error,
			productCode: "PWR44",
			itemName: "USB Power Bank 25800mAh",
			amount: "21",
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
			image: error,
			productCode: "SC01",
			itemName: "Spider Catcher",
			amount: "93",
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
			image: error,
			productCode: "PPF03",
			itemName: "Portable Personal Fan",
			amount: "104",
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
			image: error,
			productCode: "SW08",
			itemName: "Star Wars USB Cup Warmer BB-8",
			amount: "37",
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
			image: error,
			productCode: "POL03",
			itemName: "Polaroid Play 3D Pen",
			amount: "199",
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
			image: error,
			productCode: "NRF10",
			itemName: "Nerf N-Strike Elite Disruptor",
			amount: "173",
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
			image: error,
			productCode: "KST01",
			itemName: "KLIKBOT Studio Thud",
			amount: "42",
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
			image: error,
			productCode: "PIN00",
			itemName: "Plan Toys Pinball",
			amount: "10",
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
			image: error,
			productCode: "FP59",
			itemName: "Funko Pop! Disney: Frozen 2 - Olaf",
			amount: "23",
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
			image: error,
			productCode: "LEX95",
			itemName: "LEGO Classic Bricks and Ideas - 11001",
			amount: "255",
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

	];

	//REMOVEME when the data for products is done on backend
	return result;

	return (async () => {await getCategoriesAsync();})();
}

async function getCategoriesAsync() {
	let result = [];
	return await axios.get(Config.serverLocation +  "/products", {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': sessionStorage.getItem(Config.userTokenSession)
		}
	}).then(
		(response) => {
			result = [];
			for (const item of response["data"]) {
				result.push({
					image: error,
					productCode: item["productCode"],
					itemName: item["productName"],
					amount: 30
				});
			}

			return result;
		}
	);
}

export let CategoriesList = getCategories();

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