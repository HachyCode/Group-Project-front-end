import React from 'react';
import {ItemBox, SmallText, LargeText, Qty} from './SelectedPOFormItemCSS';
import {format} from '../../Utillity';

class SelectedPOFormItem extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;

		this.state = {
			quantity: 1
		};
	}

	changeQTY = (e) => {
		this.setState({quantity: e.target.value});
	}

	render = () => {
		return (
			<ItemBox>
				<SmallText>{this.props.orderID}</SmallText>{/* Order ID */}
				<SmallText>{this.props.itemID}</SmallText>{/* Item ID */}
				<LargeText>{this.props.itemName}</LargeText>{/* Item Name */}
				<Qty onChange={this.changeQTY}/>{/* QTY */}
				<SmallText>{format(this.props.unitPrice)}</SmallText>{/* Unit Price */}
				<SmallText>{format(this.props.unitPrice * this.state.quantity)}</SmallText>{/* Sub-Total */}
			</ItemBox>
		);
	}
}

export default SelectedPOFormItem;