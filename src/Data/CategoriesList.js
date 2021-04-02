import error from '../Images/CategorieItems/404error.png';

function getCategories() {
	//get stuff
	return [
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
	];
}

export let CategoriesList = getCategories();