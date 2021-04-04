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
import {eventBus, CategoryClick} from '../../EventBus';

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

		for (let i = 0; i < Object.keys(this.categoriesData).length; i++) {
			result.push(<StyledCategoriesElement
				supplierName={this.categoriesData[i].supplierName}
				cost={this.categoriesData[i].cost}
				deliveryTime={this.categoriesData[i].deliveryTime}
				selectableItems={this.props.selectableItems}
				onClick={() => {this.selectableElementClick(this.categoriesData[i]);}}
			/>);
		}

		return result;
	}

	selectableElementClick = (categoriesItem) => {
		if (this.props.selectableItems) {
			eventBus.emit(CategoryClick, {categoriesItem: categoriesItem});
		}
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