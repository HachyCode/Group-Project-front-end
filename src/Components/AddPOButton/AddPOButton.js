import React from 'react';
import {POList} from '../../Data/POList';
import {StyledAddPOButton, StyledAddPOButtonBox} from './AddPOButtonCSS';

class AddPOButton extends React.Component {
	addPOButtonPress = () => {
		const lastID = POList[POList.length - 1].poID;
		//w3 page talks about replace as ifit modifies the string that it is being used on so put it
		//in a separate variable to be safe.
		let rawNumID = (parseInt(lastID.replace(" ", "")) + 1).toString();

		//pad with 0s
		while (rawNumID.length < 8) {
			rawNumID = "0" + rawNumID;
		}

		//add the space back
		const finalID = rawNumID.slice(0, 4) + " " + rawNumID.slice(4);

		POList.push({
			poID: finalID,
			supplier: null,
			progress: 0,
		});

		this.props.updatePage();
	}

	render = () => {
		return (
			<StyledAddPOButtonBox>
				<StyledAddPOButton onClick={this.addPOButtonPress}>
					{this.props.contents}
				</StyledAddPOButton>
			</StyledAddPOButtonBox>
		);
	}
}

export default AddPOButton;