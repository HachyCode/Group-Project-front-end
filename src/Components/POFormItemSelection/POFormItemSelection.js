import React from 'react';
import PoOrderAddItemButton from '../PoOrderAddItemButton/PoOrderAddItemButton';
import SelectedPOFormItem from '../SelectedPOFormItem/SelectedPOFormItem';
import {getPriceBySupplierForCategory} from '../../Data/CategoriesList';

class POFormItemSelection extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;

		this.state = {
			selectedItem: false,
			itemID: "",
			itemName: "",
			unitPrice: 0
		};

		console.log("const: " + !!this.state.selectedItem);
	}

	onSelectItem = (categoriesItem) => {
		this.setState({
			selectedItem: categoriesItem,
			itemID: categoriesItem.productCode,
			itemName: categoriesItem.itemName,
			unitPrice: getPriceBySupplierForCategory(categoriesItem.productCode, categoriesItem.supplierName)
		});
	}

	generateContents = () => {
		console.log("gen: " + !!this.state.selectedItem + ", " + this.state.selectedItem);
		return !!this.state.selectedItem ?
			<SelectedPOFormItem
				orderID={this.props.poID}
				itemID={this.state.itemID}
				itemName={this.state.itemName}
			/> : <PoOrderAddItemButton text={this.props.text} onSelectItem={this.onSelectItem}/>;
	}

	render = () => {
		return (
			<div>{this.generateContents()}</div>
		);
	}
}

export default POFormItemSelection;