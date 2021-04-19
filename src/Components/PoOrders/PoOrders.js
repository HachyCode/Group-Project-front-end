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
import PoOrderAddItemButton from '../PoOrderAddItemButton/PoOrderAddItemButton';

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
				<ItemBox>
					<SmallText>999999999</SmallText>{/* Order ID */}
					<SmallText>NRF10</SmallText>{/* Item ID */}
					<LargeText>LEGO Classic Bricks and Ideas - 11001</LargeText>{/* Item Name */}
					<Qty/>{/* QTY */}
					<SmallText>£____.___</SmallText>{/* Unit Price */}
					<SmallText>£________.__</SmallText>{/* Sub-Total */}
				</ItemBox>
				<PoOrderAddItemButton poID={props.poID} text="Add Item"/>
				<PoOrderAddItemButton poID={props.poID} text="Add Item"/>
				<PoOrderAddItemButton poID={props.poID} text="Add Item"/>
				<PoOrderAddItemButton poID={props.poID} text="Add Item"/>
				{/*<OrderAddBtn>Add Item</OrderAddBtn>
				<OrderAddBtn>Add Item</OrderAddBtn>
				<OrderAddBtn>Add Item</OrderAddBtn>
				<OrderAddBtn>Add Item</OrderAddBtn>*/}
			</OrderBox>
		</div>
	);
}

export default PoOrders;
