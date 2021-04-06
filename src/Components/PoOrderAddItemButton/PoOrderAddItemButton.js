import React from 'react';
import {CategoriesDiv, OrderAddBtn} from './PoOrderAddItemButtonCSS';
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
		console.log("selected item");
		if (data.categoryID === this.state.id) {
			this.setState({text: data.categoriesItem.supplierName, categoriesVisible: false});
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
			<div>
				<OrderAddBtn onClick={this.addItemPress}>{this.state.text}</OrderAddBtn>
				<CategoriesDiv 
					selectableItems
					displayCategories={this.state.categoriesVisible}
					categoryID={this.state.id}
				/>
			</div>
		);
	}
}

export default PoOrderAddItemButton;