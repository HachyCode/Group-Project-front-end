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
import {
	getCategoryByItemID, 
	getPriceBySupplierForCategory, 
	getNumCategoryIDByProductCode
} from '../../Data/CategoriesList';
import {numPriceFromFormattedPrice} from '../../Utillity';
import {getSupplierAbbrevFromName} from '../../Data/Suppliers';
import {getQuantityOfItem} from '../../Data/POList';

function PoOrders(props) {

	function generatePreExistingItems() {
		const result = [];
		for (let i = 0; i < 5; i++) {
			//orderItems

			if (props.poItem.orderItems && props.poItem.orderItems[i]) {
				const poItem = props.poItem;
				const orderItem = poItem.orderItems[i];
				let itemID = orderItem.itemID;

				//https://stackoverflow.com/a/61550284
				//accessed 28/04/2021
				//here be more regex wizards
				if (typeof orderItem.itemID === "string" && /[a-zA-Z]/g.test(orderItem.itemID)) {
					itemID = getNumCategoryIDByProductCode(orderItem.itemID);
				}

				const itemCategory = getCategoryByItemID(itemID);
				const supplierNameAbbrev = getSupplierAbbrevFromName(poItem.supplier);
				const price = getPriceBySupplierForCategory(itemCategory.productCode, supplierNameAbbrev);

				if (!price) {
					result.push(<b></b>);
					result.push(<POFormItemSelection 
						updateItemSelection={props.updateItemSelection} 
						supplierFilter={props.supplierFilter} 
						poID={props.poItem.poID} 
						text={"'" + itemCategory.itemName + "' is no longer supplied by '" + poItem.supplier + "'."}
					/>);
					continue;
				}

				const priceUnformatted = numPriceFromFormattedPrice(price);

				if (orderItem && orderItem["itemID"]) {
					result.push(<SelectedPOFormItem
						orderID={poItem.poID}
						itemID={itemCategory.productCode}
						itemName={itemCategory.itemName}
						unitPrice={priceUnformatted}
						updateItemSelection={props.updateItemSelection}
						itemNumID={itemCategory.itemID}
						quantity={orderItem.quantity}
					/>);

					props.updateItemSelection(itemCategory.itemID, priceUnformatted, 
						orderItem.quantity, true);
				} else {
					result.push(<POFormItemSelection 
						updateItemSelection={props.updateItemSelection} 
						supplierFilter={props.supplierFilter} 
						poID={props.poItem.poID} 
						text="Add Item"
					/>);
				}
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
