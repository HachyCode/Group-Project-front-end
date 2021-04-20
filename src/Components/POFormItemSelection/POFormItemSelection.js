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
	}

	onSelectItem = (data) => {
		console.log(JSON.stringify(data));
		this.setState({
			itemID: data.productCode,
			itemName: data.itemName,
			unitPrice: getPriceBySupplierForCategory(data.productCode, data.supplierName),
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
					/> : <PoOrderAddItemButton 
						text={this.props.text} 
						onSelectItem={this.onSelectItem}
						unitPrice={this.state.unitPrice}
						supplierFilter={this.props.supplierFilter}
					/>}
			</div>
		);
	}
}

export default POFormItemSelection;