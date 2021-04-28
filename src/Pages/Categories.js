import React, {useState} from 'react';
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
	const [filter, setFilter] = useState("");

	return (
		<MainBody className={props.className}>
			<FilterTop>
				<StyledSearchBar clicked={(contents) => {setFilter(contents);}}/>
				<FilterBox>
					<SpacedLabel contents="Image"/>
					<ProductCodeFilterBox>
						<ProductCodeFilter name="Code" sortingID="productCode"/>
					</ProductCodeFilterBox>
					<ItemNameFilterBox>
						<ItemNameFilter name="Item Name" sortingID="itemName"/>
					</ItemNameFilterBox>
					<AmountFilterBox>
						<AmountFilter name="QTY stored" sortingID="amount"/>
					</AmountFilterBox>
				</FilterBox>
			</FilterTop>
			<CategoriesListArea 
				categoriesData={CategoriesList} 
				selectableItems={props.selectableItems}
				categoryID={!!props.categoryID ? props.categoryID : -1}
				supplierFilter={props.supplierFilter}
				searchFilter={filter}
			/>
		</MainBody>
	);
}

export default Categories;
