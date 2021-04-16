const gbpFormat = Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'});

export function format(num) {
	return gbpFormat.format(num).slice(1);
}