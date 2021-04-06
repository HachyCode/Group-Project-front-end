import React from 'react';
import {CategoriesDiv, OrderAddBtn} from './PoOrderAddItemButtonCSS';
import {eventBus, CategoryClick} from '../../EventBus';

/*
props:
	text - the text displayed on the button itself
*/
class PoOrderAddItemButton extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			categoriesVisible: false,
			text: props.text
		};
	}

	selectItem = (data) => {
		console.log("selected item");
		this.setState({text: data.categoriesItem.supplierName, categoriesVisible: false});
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
				/>
			</div>
		);
	}
}

export default PoOrderAddItemButton;