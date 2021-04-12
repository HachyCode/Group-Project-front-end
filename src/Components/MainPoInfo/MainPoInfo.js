import React from 'react';
import {
	InfoBox, 
	Box, 
	Text, 
	Input
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
				<div/>
				<InfoBox>
					<Box>
						<Text>SA Name: </Text>
						<Input value={this.props.poItem.supplier} onChange={(e) => {this.saName = e.target.value;}}/>
					</Box>
					<Box>
						<Text>SA ID: </Text>
						<Input defaultValue={this.props.poItem.poID} onChange={(e) => {this.saID = e.target.value;}}/>
					</Box>
					<Box>
						<Text>PO Form ID: </Text>
						<Input 
							defaultValue={getSupplierFromName(this.props.poItem.supplier)} 
							onChange={(e) => {this.poFormID = e.target.value;}}
						/>
					</Box>
				</InfoBox>
			</div>
		);
	}
}

export default MainPoInfo;
