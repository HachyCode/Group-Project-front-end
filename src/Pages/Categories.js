import React from 'react';
import {
	StyledSearchBar, 
	SearchBox,
	CategoriesBox,
	FilterBox,
	SpacedLabel,
	SupplierNameFilter,
	AmountFilter,
	DeliveryTimeFilter,
	ProductCodeFilter
} from '../Components/PageCSS/CategoriesCSS';
import CategoriesListArea from '../Components/CategoriesListArea/CategoriesListArea';
import {CategoriesList} from '../Data/CategoriesList';

function Categories() {
	return (
		<div>
			{/*Viktorija*/}
			<SearchBox>
				<StyledSearchBar/>
			</SearchBox>
			<FilterBox>
				<SpacedLabel contents="Image"/>
				<ProductCodeFilter name="Product Code" sortId="productCode"/>
				<SupplierNameFilter name="Supplier Name" sortID="supplierName"/>
				<AmountFilter name="Amount" sortID="amount"/>
				<DeliveryTimeFilter name="Delivery Time" sortID="deliveryTime"/>
			</FilterBox>
			<CategoriesBox>
				<CategoriesListArea categoriesData={CategoriesList}/>
			</CategoriesBox>
		</div>
	);
}

export default Categories;
