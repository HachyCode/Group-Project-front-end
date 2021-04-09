function getDataFromDB() {
	//database stuff here
	//construct list

	//return gotten data (temporarily the default list)
	return [
		{
			poID: "0000 0001",
			supplier: "Bitmore Inc",
			progress: 6,
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
}

let POList = getDataFromDB();

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