import React from 'react';
import {
	MainBox,
	SupplierName,
	Cost,
	DeliveryTime
} from './CategoriesElementCSS';
import {eventBus, CategoryClick} from '../../EventBus';

/*
props:
	supplierName
	cost
	deliveryTime
*/
class CategoriesElement extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	selectableElementClick = (categoriesItem) => {
		if (this.props.selectableItems) {
			eventBus.emit(CategoryClick, {
				categoriesItem: categoriesItem, 
				categoryID: this.props.categoryID,
				itemName: this.props.itemName
			});
		}
	}

	render = () => {
		return (
			<MainBox className={this.props.className} onClick={() => this.selectableElementClick(this.props.categoriesItem)}>
				<SupplierName>
					{this.props.categoriesItem.supplierName}
				</SupplierName>
				<Cost>
					{this.props.categoriesItem.cost}
				</Cost>
				<DeliveryTime >
					{this.props.categoriesItem.deliveryTime}
				</DeliveryTime >
			</MainBox>
		);
	}
}

export default CategoriesElement;