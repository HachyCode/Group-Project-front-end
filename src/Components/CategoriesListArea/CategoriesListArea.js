import React from 'react';
import {StyledCategoriesAccordion, CategoriesListAreaBox} from './CategoriesListAreaCSS';

/*
props:
	categoriesData
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
				supplierName={this.props.categoriesData[i].supplierName}
				amount={this.props.categoriesData[i].amount}
				deliveryTime={this.props.categoriesData[i].deliveryTime}
				categoriesData={this.props.categoriesData[i].categoriesData}
				key={i}
			/>);
		}

		return result;
	}

	render = () => {
		return (
			<CategoriesListAreaBox>
				{this.generateCategoriesAccordions()}
			</CategoriesListAreaBox>
		);
	}
}

export default CategoriesListArea;