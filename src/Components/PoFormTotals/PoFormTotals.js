import React from 'react';
import {
	TotalBoxs, 
	Box, 
	Text, 
	Value
} from './PoFormTotalsCSS';

const gbpFormat = Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'});

function format(num) {
	return gbpFormat.format(num).slice(1);
}

/*
props:
	cost
	quantity
*/
function PoFormTotals(props) {
	const cost = props.cost ? props.cost : 0;
	const quantity = props.quantity ? props.quantity : 0;
	const noVATTotal = cost * quantity;
	const vat = noVATTotal * 0.2;
	const vatTotal = noVATTotal + vat;
	return (
		<div>
			<TotalBoxs>
				<Box>
					<Text>Total without VAT: £</Text>
					<Value>{format(noVATTotal)}</Value>
				</Box>
				<Box>
					<Text>20% VAT: £</Text>
					<Value>{format(vat)}</Value>
				</Box>
				<Box>
					<Text>Total with VAT: £</Text>
					<Value>{format(vatTotal)}</Value>
				</Box>
			</TotalBoxs>
		</div>
	);
}

export default PoFormTotals;
