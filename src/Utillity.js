const gbpFormat = Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'});

export function format(num) {
	return gbpFormat.format(num);
}

export function numPriceFromFormattedPrice(price) {
	return parseInt(price.replace("£", ""));
}