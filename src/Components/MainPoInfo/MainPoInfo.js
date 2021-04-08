import React from 'react';
import {
	InfoBox, 
	Box, 
	Text, 
	Input,
	TextAnswer
} from './MainPoInfoCSS';

class MainPoInfo extends React.Component{

	constructor(props) {
		super(props);
		this.props = props;
	}

	render = () => {
		return (
			<div>
				<InfoBox>
					<Box>
						<Text>SA Name: </Text>
						<Input/>
					</Box>
					<Box>
						<Text>SA ID: </Text>
						<Input/>
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
