const gbpFormat = Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'});

export function format(num) {
	return gbpFormat.format(num);
}

export function numPriceFromFormattedPrice(price) {
	return parseInt(price.replace("£", ""));
}

export function formatPOIDFromNum(poIDNum) {
	let poIDString = poIDNum.toString();
	
	while (poIDString.length < 8) {
		poIDString = "0" + poIDString;
	}

	//add the space
	return poIDString.slice(0, 4) + " " + poIDString.slice(4);
}

export function numFromPOID(poID) {
	return parseInt(poID.replace(" ", ""));
}