import React from 'react';
import {
	InfoBox, 
	Box, 
	Text, 
	Input,
	TextAnswer
} from './MainPoInfoCSS';
import {getSupplierFromName} from '../../Data/Suppliers';
import {eventBus, POFormDone} from '../../EventBus';

class MainPoInfo extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.saName = "";
		this.saID = "";
		this.poFormID = "";
	}

	donePressed = () => {
		//this.props.poItem.supplier = 
	}

	componentDidMount = () => {
		eventBus.on(POFormDone, this.donePressed);
	}

	componentWillUnmount = () => {
		eventBus.off(POFormDone, this.donePressed);
	}

	render = () => {
		return (
			<div>
				<InfoBox>
					<Box>
						<Text>SA Name: </Text>
						<TextAnswer>Name</TextAnswer>
					</Box>
					<Box>
						<Text>SA ID: </Text>
						<TextAnswer>ID</TextAnswer>
					</Box>
					<Box>
						<Text>PO Form ID: </Text>
						<TextAnswer>{this.props.ID}</TextAnswer>
					</Box>
				</InfoBox>
			</div>
		);
	}
}

export default MainPoInfo;
