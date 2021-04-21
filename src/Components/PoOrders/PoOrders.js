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
				<POFormItemSelection 
					updateItemSelection={props.updateItemSelection} 
					supplierFilter={props.supplierFilter} 
					poID={props.poItem.poID} 
					text="Add Item"
				/>
				{/*<ItemBox>
					<SmallText>999999999</SmallText>{/* Order ID /}
					<SmallText>NRF10</SmallText>{/* Item ID /}
					<LargeText>LEGO Classic Bricks and Ideas - 11001</LargeText>{/* Item Name /}
					<Qty/>{/* QTY /}
					<SmallText>£____.___</SmallText>{/* Unit Price /}
					<SmallText>£________.__</SmallText>{/* Sub-Total /}
				</ItemBox>*/}
				{/*TODO: have these auto convert if the requisite number of items are already in the POForm */}
				<POFormItemSelection 
					updateItemSelection={props.updateItemSelection} 
					supplierFilter={props.supplierFilter} 
					poID={props.poItem.poID} 
					text="Add Item"
				/>
				<POFormItemSelection 
					updateItemSelection={props.updateItemSelection} 
					supplierFilter={props.supplierFilter} 
					poID={props.poItem.poID} 
					text="Add Item"
				/>
				<POFormItemSelection 
					updateItemSelection={props.updateItemSelection} 
					supplierFilter={props.supplierFilter} 
					poID={props.poItem.poID} 
					text="Add Item"
				/>
				<POFormItemSelection 
					updateItemSelection={props.updateItemSelection} 
					supplierFilter={props.supplierFilter} 
					poID={props.poItem.poID} 
					text="Add Item"
				/>
			</OrderBox>
		</div>
	);
}

export default PoOrders;
