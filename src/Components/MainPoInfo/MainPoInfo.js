import React from 'react';
import {
	InfoBox, 
	Box, 
	Text, 
	Input,
	TextAnswer
} from './MainPoInfoCSS';
import {eventBus, POFormDone} from '../../EventBus';
import {getDataOfCurrentUser} from '../../Data/UserData';
import {getByPOID} from '../../Data/POList';

class MainPoInfo extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.po = getByPOID(props.ID);
		
		this.state = {
			saName: "",
			saID: "",
			poFormID: props.ID
		};
		
		this.currentUser = getDataOfCurrentUser();
		console.log(JSON.stringify("userobj: " + this.currentUser));
	}

	donePressed = () => {
		this.setState({
			saName: (this.state.saName && this.state.saName.length > 0 ? this.state.saName : this.currentUser.username),
			saID: (this.state.saID && this.state.saID.length > 0 ? this.state.saID : this.currentUser.staffID)
		});
		
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
						<TextAnswer>{this.state.saName ? this.state.saName : "-"}</TextAnswer>
					</Box>
					<Box>
						<Text>SA ID: </Text>
						<TextAnswer>{this.state.saID ? this.state.saID : "-"}</TextAnswer>
					</Box>
					<Box>
						<Text>PO Form ID: </Text>
						<TextAnswer>{this.state.poFormID}</TextAnswer>
					</Box>
				</InfoBox>
			</div>
		);
	}
}

export default MainPoInfo;
