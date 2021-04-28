import React from 'react';
import {ItemBox, SmallText, LargeText, Qty} from './SelectedPOFormItemCSS';
import {format} from '../../Utillity';

/*
props:
	updateItemSelection [method]
	orderID
	itemID
	itemName
	supplierName
	unitPrice
*/
class SelectedPOFormItem extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;

		this.state = {
			quantity: this.props.quantity ? this.props.quantity : 1
		};
	}

	changeQTY = (e) => {
		const quantity = e.target.value;

		//https://stackoverflow.com/a/1779019
		//referenced 21/04/2021
		//here be regex wizards
		if (/^\d+$/.test(quantity) || !quantity) {
			this.props.updateItemSelection(this.props.itemNumID, this.props.unitPrice, quantity);

			this.setState({quantity: quantity});
		} else {
			e.target.value = this.state.quantity;
		}
	}

	render = () => {
		return (
			<ItemBox>
				<SmallText>{this.props.orderID}</SmallText>{/* Order ID */}
				<SmallText>{this.props.itemID}</SmallText>{/* Item ID */}
				<LargeText>{this.props.itemName}</LargeText>{/* Item Name */}
				<Qty defaultValue={this.state.quantity} onChange={this.changeQTY}/>{/* QTY */}
				<SmallText>{format(this.props.unitPrice)}</SmallText>{/* Unit Price */}
				<SmallText>{format(this.props.unitPrice * this.state.quantity)}</SmallText>{/* Sub-Total */}
			</ItemBox>
		);
	}
}

export default SelectedPOFormItem;