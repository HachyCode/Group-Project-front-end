import React from 'react';
import {
	InfoBox, 
	Box, 
	Text, 
	Input
} from './MainPoInfoCSS';
import {getSupplierFromName} from '../../Data/Suppliers';

function MainPoInfo(props) {
	return (
		<div>
			<div/>
			<InfoBox>
				<Box>
					<Text>SA Name: </Text>
					<Input value={props.poItem.supplier}/>
				</Box>
				<Box>
					<Text>SA ID: </Text>
					<Input value={props.poItem.poID}/>
				</Box>
				<Box>
					<Text>PO Form ID: </Text>
					<Input value={getSupplierFromName(props.poItem.supplier)}/>
				</Box>
			</InfoBox>
		</div>
	);
}

export default MainPoInfo;
