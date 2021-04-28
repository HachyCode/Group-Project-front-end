import React from 'react';
import {CategoriesDiv, OrderAddBtn, AddItemBox} from './PoOrderAddItemButtonCSS';
import {eventBus, CategoryClick} from '../../EventBus';

/*
props:
	text - the text displayed on the button itself
*/
let id = 0;

class PoOrderAddItemButton extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			categoriesVisible: false,
			text: props.text,
			id: id++
		};
	}

	selectItem = (data) => {
		if (data.categoryID === this.state.id) {
			this.setState({text: data.itemName + ", " + data.categoriesItem.supplierName, categoriesVisible: false});

			if (!!this.props.onSelectItem) {
				this.props.onSelectItem(data);
			}
		}
	}

	componentDidMount = () => {
		eventBus.on(CategoryClick, this.selectItem);
	}

	componentWillUnmount = () => {
		eventBus.off(CategoryClick, this.selectItem);
	}

	addItemPress = () => {
		this.setState({categoriesVisible: !this.state.categoriesVisible});
	}

	render = () => {
		return (
			<AddItemBox>
				<OrderAddBtn onClick={this.addItemPress}>{this.state.text}</OrderAddBtn>
				<CategoriesDiv 
					selectableItems
					displayCategories={this.state.categoriesVisible}
					categoryID={this.state.id}
					supplierFilter={this.props.supplierFilter}
				/>
			</AddItemBox>
		);
	}
}

export default PoOrderAddItemButton;