import React from 'react';
import { 
	AccordionDropdownBox, 
	AccordionMainBox,
	DropDownBoxLabelsSection,
	AccordionContainer,
	ImageBox,
	ProductCodeBox,
	SupplierNameBox,
	AmountBox,
	DeliveryTimeBox,
	StyledCategoriesElement,
	SupplierNameLabel,
	CostLabel,
	DeliveryTimeLabel
} from './CategoriesAccordionCSS';
import {getSupplierAbbrevFromName} from '../../Data/Suppliers';

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
		selectableItems
		supplierFilter


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

	/*TODO: this calls way more than I'd think it would, I think this is the one and only time where React re rendering too much
	//has been a problem for me. I must say it's comparatively pleasant.*/
	generateCategories = () => {
		let result = [];

		for (let i = 0; i < Object.keys(this.categoriesData).length; i++) {
			if (!this.props.supplierFilter || 
				this.categoriesData[i].supplierName === getSupplierAbbrevFromName(this.props.supplierFilter)) {
				result.push(<StyledCategoriesElement
					categoriesItem={this.categoriesData[i]}
					selectableItems={this.props.selectableItems}
					itemName={this.props.supplierName}
					productCode={this.props.productCode}
					categoryID={this.props.categoryID}
				/>);
			}
		}

		return result;
	}

	render = () => {
		return (
			<AccordionContainer>
				<AccordionMainBox onClick={this.toggleExpanded}>
					<ImageBox src={this.props.image} alt="missing"/>
					<ProductCodeBox>
						{this.props.productCode}
					</ProductCodeBox>
					<SupplierNameBox>
						{this.props.supplierName}
					</SupplierNameBox>
					<AmountBox>
						{this.props.amount}
					</AmountBox>
				</AccordionMainBox>
				<AccordionDropdownBox visible={this.state.showingAccordion}>
					<DropDownBoxLabelsSection>
						<SupplierNameLabel contents="Supplier Name"/>
						<CostLabel contents="Cost"/>
						<DeliveryTimeLabel contents="Delivery Time"/>
					</DropDownBoxLabelsSection>
					{this.generateCategories()}
				</AccordionDropdownBox>
			</AccordionContainer>
		);
	}
}

export default CategoriesAccordion;