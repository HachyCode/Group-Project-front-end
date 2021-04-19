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

	onSelectItem = (categoriesItem) => {
		this.setState({
			selectedItem: categoriesItem,
			itemID: categoriesItem.productCode,
			itemName: categoriesItem.itemName,
			unitPrice: getPriceBySupplierForCategory(categoriesItem.productCode, categoriesItem.supplierName)
		});
	}

	render = () => {
		return (
			<div>{
				this.state.selectedItem ? 
					<PoOrderAddItemButton text={this.props.text} onSelectItem={this.onSelectItem}/> :
					<SelectedPOFormItem 
						orderID={this.props.poID} 
						itemID={this.state.itemID}
						itemName={this.state.itemName}
					/> 
			}
			</div>
		);
	}
}

export default POFormItemSelection;