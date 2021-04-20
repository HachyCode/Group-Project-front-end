import React from 'react';
import {
	OrderBox,
	ItemBox,
	Line,
	SmallText,
	LargeText,
	Qty,
	OrderAddBtn,
	SmallFilter,
	LargeFilter
} from './PoOrdersCSS';
import POFormItemSelection from '../POFormItemSelection/POFormItemSelection';
import SelectedPOFormItem from '../SelectedPOFormItem/SelectedPOFormItem';

function PoOrders(props) {
	return (
		<div>
			<OrderBox>
				<ItemBox>
					<SmallFilter>Order ID</SmallFilter>
					<SmallFilter>Item ID</SmallFilter>
					<LargeFilter>Item Name</LargeFilter>
					<SmallFilter>QTY</SmallFilter>
					<SmallFilter>Unit Price</SmallFilter>
					<SmallFilter>Sub-Total</SmallFilter>
				</ItemBox>
				<Line/>
				<SelectedPOFormItem 
					orderID={999999999} 
					itemID="NRF10" 
					itemName="LEGO Classic Bricks and Ideas - 11001"
					unitPrice={10}
				/>
				{/*<ItemBox>
					<SmallText>999999999</SmallText>{/* Order ID /}
					<SmallText>NRF10</SmallText>{/* Item ID /}
					<LargeText>LEGO Classic Bricks and Ideas - 11001</LargeText>{/* Item Name /}
					<Qty/>{/* QTY /}
					<SmallText>£____.___</SmallText>{/* Unit Price /}
					<SmallText>£________.__</SmallText>{/* Sub-Total /}
				</ItemBox>*/}
				<POFormItemSelection poID={props.poItem.poID} text="Add Item"/>
				<POFormItemSelection poID={props.poItem.poID} text="Add Item"/>
				<POFormItemSelection poID={props.poItem.poID} text="Add Item"/>
				<POFormItemSelection poID={props.poItem.poID} text="Add Item"/>
			</OrderBox>
		</div>
	);
}

export default PoOrders;
