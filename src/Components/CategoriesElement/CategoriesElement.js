import React from 'react';
import {MainBox} from './CategoriesElementCSS';

/*
props:
	supplierName
	cost
	deliveryTime
*/
class CategoriesElement extends React.Component {
	render = () => {
		return (
			<MainBox>
				<div>
					{this.props.supplierName}
				</div>
				<div>
					{this.props.cost}
				</div>
				<div>
					{this.props.deliveryTime}
				</div>
			</MainBox>
		);
	}
}

export default CategoriesElement;