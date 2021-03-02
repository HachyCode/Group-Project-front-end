import React from 'react';
import {
	StyledSearchBar, 
	SearchBox,
	CategoriesBox,
	FilterBox,
	SpacedLabel,
	SupplierNameFilter,
	AmountFilter,
	DeliveryTimeFilter
} from '../Components/PageCSS/CategoriesCSS';

function genItems(){
	return [

	];
}

function Categories() {
	return (
		<div>
			{/*Viktorija*/}
			<SearchBox>
				<StyledSearchBar/>
			</SearchBox>
			<FilterBox>
				<SpacedLabel contents="Image"/>
				<SupplierNameFilter default="SupplierName"/>
				<AmountFilter default="Amount"/>
				<DeliveryTimeFilter default="DeliveryTime"/>
			</FilterBox>
			<CategoriesBox>
				Categories
			</CategoriesBox>
		</div>
	);
}

export default Categories;
