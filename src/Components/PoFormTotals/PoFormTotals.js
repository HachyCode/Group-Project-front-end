import React from 'react';
import {
	TotalBoxs, 
	Box, 
	Text, 
	Value
} from './PoFormTotalsCSS';

function PoFormTotals() {
	return (
		<div>
			<TotalBoxs>
				<Box>
					<Text>Total without VAT: £</Text>
					<Value>000 000 000.00</Value>
				</Box>
				<Box>
					<Text>20% VAT: £</Text>
					<Value>000 000.00</Value>
				</Box>
				<Box>
					<Text>Total with VAT: £</Text>
					<Value>000 000 000.00</Value>
				</Box>
			</TotalBoxs>
		</div>
	);
}

export default PoFormTotals;
