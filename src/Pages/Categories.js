import React from 'react';
import {
	StyledSearchBar, 
	SearchBox,
	CategoriesBox,
	FilterBox,
	SpacedLabel,
	SupplierNameFilter,
	AmountFilter,
	ProductCodeFilter,
	FilterTop
} from '../Components/PageCSS/CategoriesCSS';
import CategoriesListArea from '../Components/CategoriesListArea/CategoriesListArea';
import {CategoriesList} from '../Data/CategoriesList';

function Categories() {
	return (
		<div>
			<FilterTop>
				<SearchBox>
					<StyledSearchBar/>
				</SearchBox>
				<FilterBox>
					<SpacedLabel contents="Image"/>
					<ProductCodeFilter name="Code" sortId="productCode"/>
					<SupplierNameFilter name="Item Name" sortID="itemName"/>
					<AmountFilter name="QTY stored" sortID="amount"/>
				</FilterBox>
			</FilterTop>
			<CategoriesBox>
				<CategoriesListArea categoriesData={CategoriesList}/>
			</CategoriesBox>
		</div>
	);
}

export default Categories;
