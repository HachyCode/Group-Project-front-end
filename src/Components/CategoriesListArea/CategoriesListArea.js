import React from 'react';
import {StyledCategoriesAccordion, CategoriesListAreaBox} from './CategoriesListAreaCSS';

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
	}

	generateCategoriesAccordions = () => {
		let result = [];

		for (let i = 0; i < this.props.categoriesData.length; i++) {
			result.push(<StyledCategoriesAccordion 
				image={this.props.categoriesData[i].image}
				productCode={this.props.categoriesData[i].productCode}
				supplierName={this.props.categoriesData[i].itemName}
				amount={this.props.categoriesData[i].amount}
				deliveryTime={this.props.categoriesData[i].deliveryTime}
				categoriesData={this.props.categoriesData[i].categoriesData}
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