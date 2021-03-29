import React from 'react';
import { 
	AccordionDropdownBox, 
	AccordionMainBox,
	DropDownBoxLabelsSection
} from './CategoriesAccordionCSS';
import Label from '../Label/Label';
import CategoriesElement from '../CategoriesElement/CategoriesElement';


/*
	props:
		image
		productCode
		supplierName
		amount
		deliveryTime
		categoriesData: [
			supplierName
			cost
			deliveryTime
		]


*/
class CategoriesAccordion extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.categoriesData = props.categoriesData;

		this.state = {
			showingAccordion: false
		};
	}

	toggleExpanded = () => {
		this.setState({
			showingAccordion: !this.state.showingAccordion
		});
	}

	generateCategories = () => {
		let result = [];

		console.log(!!this.categoriesData);

		for (let i = 0; i < Object.keys(this.categoriesData).length; i++) {
			result.push(<CategoriesElement
				supplierName={this.categoriesData[i].supplierName}
				cost={this.categoriesData[i].cost}
				deliveryTime={this.categoriesData[i].deliveryTime}
			/>);
		}

		return result;
	}

	render = () => {
		return (
			<div>
				<AccordionMainBox onClick={this.toggleExpanded}>
					<img src={this.props.image} alt="Missing image"/>
					<div>
						{this.props.productCode}
					</div>
					<div>
						{this.props.supplierName}
					</div>
					<div>
						{this.props.amount}
					</div>
					<div>
						{this.props.deliveryTime + " days"}
					</div>
				</AccordionMainBox>
				<AccordionDropdownBox visible={this.state.showingAccordion}>
					<DropDownBoxLabelsSection>
						<Label contents="Supplier Name"/>
						<Label contents="Cost"/>
						<Label contents="Delivery Time"/>
					</DropDownBoxLabelsSection>
					{this.generateCategories()}
				</AccordionDropdownBox>
			</div>
		);
	}
}

export default CategoriesAccordion;