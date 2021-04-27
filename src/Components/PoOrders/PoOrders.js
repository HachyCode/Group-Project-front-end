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
import {getCategoryByItemID, getPriceBySupplierForCategory} from '../../Data/CategoriesList';

function PoOrders(props) {

	function generatePreExistingItems() {
		const result = [];
		console.log(JSON.stringify(props.poItem.orderItems[0]));
		for (let i = 0; i < 5; i++) {
			//orderItems

			const poItem = props.poItem;
			const orderItem = poItem.orderItems[i];
			const itemCategory = getCategoryByItemID(poItem.poID);
			const price = getPriceBySupplierForCategory(poItem.supplier);
			console.log(price);

			if (orderItem && orderItem["itemID"]) {
				result.push(<SelectedPOFormItem
					orderID={poItem.poID}
					itemID={itemCategory.productCode}
					itemName={itemCategory.itemName}
					unitPrice={price}
					updateItemSelection={props.updateItemSelection}
					itemNumID={itemCategory.itemID}
				/>);
			} else {
				result.push(<POFormItemSelection 
					updateItemSelection={props.updateItemSelection} 
					supplierFilter={props.supplierFilter} 
					poID={props.poItem.poID} 
					text="Add Item"
				/>);
			}
		}

		return result;
	}

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
				
				{generatePreExistingItems()}
				{/*TODO: have these auto convert if the requisite number of items are already in the POForm */}
				{/* <POFormItemSelection 
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
				<POFormItemSelection 
					updateItemSelection={props.updateItemSelection} 
					supplierFilter={props.supplierFilter} 
					poID={props.poItem.poID} 
					text="Add Item"
				/> */}
			</OrderBox>
		</div>
	);
}

export default PoOrders;
