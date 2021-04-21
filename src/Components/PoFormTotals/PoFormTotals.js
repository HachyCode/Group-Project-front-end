import React from 'react';
import {
	TotalBoxs, 
	Box, 
	Text, 
	Value
} from './PoFormTotalsCSS';
import {getCategoryByItemID} from '../../Data/CategoriesList';

const gbpFormat = Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'});

function format(num) {
	return gbpFormat.format(num).slice(1);
}

/*
props:
	cost
	quantity
	selectedItems
*/
function PoFormTotals(props) {
	/*const cost = props.cost ? props.cost : 0;
	const quantity = props.quantity ? props.quantity : 0;*/

	let noVATTotal = 0;

	for (const item of props.selectedItems) {
		noVATTotal += item.price * item.quantity;
	}

	//const noVATTotal = cost * quantity;
	const vat = noVATTotal * 0.2;
	const vatTotal = noVATTotal + vat;

	console.log("update totals: " + noVATTotal + ", " + vat + ", " + vatTotal);

	return (
		<div className={props.className}>
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
