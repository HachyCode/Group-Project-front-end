import React from 'react';
import {
	MainBox,
	SupplierName,
	Cost,
	DeliveryTime
} from './CategoriesElementCSS';

/*
props:
	supplierName
	cost
	deliveryTime
*/
class CategoriesElement extends React.Component {
	render = () => {
		return (
			<MainBox>
				<SupplierName>
					{this.props.supplierName}
				</SupplierName>
				<Cost>
					{this.props.cost}
				</Cost>
				<DeliveryTime >
					{this.props.deliveryTime}
				</DeliveryTime >
			</MainBox>
		);
	}
}

export default CategoriesElement;