import React from 'react';
import {
	StyledSearchBar, 
	CategoriesBox,
	FilterBox,
	SpacedLabel,
	ItemNameFilter,
	AmountFilter,
	ProductCodeFilter,
	FilterTop,
	MainBody
} from '../Components/PageCSS/CategoriesCSS';
import CategoriesListArea from '../Components/CategoriesListArea/CategoriesListArea';
import {CategoriesList} from '../Data/CategoriesList';

function Categories() {
	return (
		<MainBody>
			<FilterTop>
				<StyledSearchBar/>
				<FilterBox>
					<SpacedLabel contents="Image"/>
					<ProductCodeFilter name="Code" sortId="productCode"/>
					<ItemNameFilter name="Item Name" sortID="itemName"/>
					<AmountFilter name="QTY stored" sortID="amount"/>
				</FilterBox>
			</FilterTop>
			<CategoriesListArea categoriesData={CategoriesList}/>
		</MainBody>
	);
}

export default Categories;
