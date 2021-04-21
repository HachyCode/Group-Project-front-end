import React from 'react';
import {
	StyledSearchBar, 
	FilterBox,
	SpacedLabel,
	ItemNameFilter,
	AmountFilter,
	ProductCodeFilter,
	FilterTop,
	MainBody,
	ItemNameFilterBox,
	ProductCodeFilterBox,
	AmountFilterBox
} from '../Components/PageCSS/CategoriesCSS';
import CategoriesListArea from '../Components/CategoriesListArea/CategoriesListArea';
import {CategoriesList} from '../Data/CategoriesList';

function Categories(props) {
	return (
		<MainBody className={props.className}>
			<FilterTop>
				<StyledSearchBar/>
				<FilterBox>
					<SpacedLabel contents="Image"/>
					<ProductCodeFilterBox>
						<ProductCodeFilter name="Code" sortID="productCode"/>
					</ProductCodeFilterBox>
					<ItemNameFilterBox>
						<ItemNameFilter name="Item Name" sortID="itemName"/>
					</ItemNameFilterBox>
					<AmountFilterBox>
						<AmountFilter name="QTY stored" sortID="amount"/>
					</AmountFilterBox>
				</FilterBox>
			</FilterTop>
			<CategoriesListArea 
				categoriesData={CategoriesList} 
				selectableItems={props.selectableItems}
				categoryID={!!props.categoryID ? props.categoryID : -1}
				supplierFilter={props.supplierFilter}
			/>
		</MainBody>
	);
}

export default Categories;
