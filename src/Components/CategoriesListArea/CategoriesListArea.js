import React from 'react';
import {StyledCategoriesAccordion, CategoriesListAreaBox} from './CategoriesListAreaCSS';
import {eventBus, SortingUpdate} from '../../EventBus';
import {ascending, descending, unsorted} from '../SortingMagicButton/SortingMagicButton';

/*
props:
	categoriesData
	selectableItems - clicked items in a Category will emit an event and have the mouseover thingy
	supplierFilter - the only supplier to show
*/
class CategoriesListArea extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;

		this.state = {
			categoriesData: this.props.categoriesData,
		};
	}

	componentDidMount = () => {
		eventBus.on(SortingUpdate, this.sortByCode);
		eventBus.on(SortingUpdate, this.sortByItemName);
		eventBus.on(SortingUpdate, this.sortByQty);
	}

	componentWillUnmount = () => {
		eventBus.off(SortingUpdate, this.sortByCode);
		eventBus.off(SortingUpdate, this.sortByItemName);
		eventBus.off(SortingUpdate, this.sortByQty);
	}

	sortByCode = (data) => {
		if (data.sortingID === "productCode") {
			let newCategoriesData = this.state.categoriesData.sort((a, b) => {
				//adapted from https://stackoverflow.com/a/45544166
				return a.productCode.localeCompare(b.productCode);
			});

			if (data.sortDirection === ascending) {
				newCategoriesData.reverse();
			}

			this.setState({
				categoriesData: newCategoriesData,
			});
		}
	}

	sortByItemName = (data) => {
		if (data.sortingID === "itemName") {
			let newCategoriesData = this.state.categoriesData.sort((a, b) => {
				//adapted from https://stackoverflow.com/a/45544166
				return a.itemName.localeCompare(b.itemName);
			});

			if (data.sortDirection === ascending) {
				newCategoriesData.reverse();
			}

			this.setState({
				categoriesData: newCategoriesData,
			});
		}
	} 

	sortByQty = (data) => {
		if (data.sortingID === "amount") {
			let newCategoriesData = this.state.categoriesData.sort((a, b) => a.amount - b.amount);

			if (data.sortDirection === ascending) {
				newCategoriesData.reverse();
			}

			this.setState({
				categoriesData: newCategoriesData,
			});
		}
	}

	generateCategoriesAccordions = () => {
		let result = [];

		for (let i = 0; i < this.state.categoriesData.length; i++) {
			result.push(<StyledCategoriesAccordion 
				image={this.state.categoriesData[i].image}
				productCode={this.state.categoriesData[i].productCode}
				supplierName={this.state.categoriesData[i].itemName}
				amount={this.state.categoriesData[i].amount}
				deliveryTime={this.state.categoriesData[i].deliveryTime}
				categoriesData={this.state.categoriesData[i]}
				selectableItems={this.props.selectableItems}
				categoryID={this.props.categoryID}
				supplierFilter={this.props.supplierFilter}
				key={i}
			/>);
		}

		return result;
	}

	render = () => {
		return (
			<CategoriesListAreaBox className={this.props.className}>
				{this.generateCategoriesAccordions()}
			</CategoriesListAreaBox>
		);
	}
}

export default CategoriesListArea;