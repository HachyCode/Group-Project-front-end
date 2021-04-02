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
	StyledCategoriesElement
} from './CategoriesAccordionCSS';
import Label from '../Label/Label';

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

		for (let i = 0; i < Object.keys(this.categoriesData).length; i++) {
			result.push(<StyledCategoriesElement
				supplierName={this.categoriesData[i].supplierName}
				cost={this.categoriesData[i].cost}
				deliveryTime={this.categoriesData[i].deliveryTime}
			/>);
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
						<Label contents="Supplier Name"/>
						<Label contents="Cost"/>
						<Label contents="Delivery Time"/>
					</DropDownBoxLabelsSection>
					{this.generateCategories()}
				</AccordionDropdownBox>
			</AccordionContainer>
		);
	}
}

export default CategoriesAccordion;