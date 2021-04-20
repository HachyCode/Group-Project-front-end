import React from 'react';
import PoOrderAddItemButton from '../PoOrderAddItemButton/PoOrderAddItemButton';
import SelectedPOFormItem from '../SelectedPOFormItem/SelectedPOFormItem';
import {getPriceBySupplierForCategory} from '../../Data/CategoriesList';
import {getSupplierFromAbbrev} from '../../Data/Suppliers';
import {numPriceFromFormattedPrice} from '../../Utillity';

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
	}

	onSelectItem = (data) => {
		console.log(JSON.stringify(data));
		//the naming has become a mess
		const actualSupplierName = getSupplierFromAbbrev(data.categoriesItem.supplierName);
		let unitPrice = getPriceBySupplierForCategory(data.productCode, data.categoriesItem.supplierName);

		if (unitPrice.startsWith("£")) {
			unitPrice = numPriceFromFormattedPrice(unitPrice);
		}

		console.log(unitPrice + ", " + typeof unitPrice);

		this.setState({
			itemID: data.productCode,
			itemName: data.itemName,
			unitPrice: unitPrice,
			selectedItem: data.categoriesItem
		});
	}

	render = () => {
		return (
			<div className={this.props.className}>
				{this.state.selectedItem ?
					<SelectedPOFormItem
						orderID={this.props.poID}
						itemID={this.state.itemID}
						itemName={this.state.itemName}
						unitPrice={this.state.unitPrice}
					/> : <PoOrderAddItemButton 
						text={this.props.text} 
						onSelectItem={this.onSelectItem}
						supplierFilter={this.props.supplierFilter}
					/>}
			</div>
		);
	}
}

export default POFormItemSelection;