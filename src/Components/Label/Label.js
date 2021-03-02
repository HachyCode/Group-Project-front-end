import React from 'react';
import {Box} from './LabelCSS';

class Label extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	getArrow = () => {
		if (this.props.arrow) {
			return (<i class="fas fa-angle-down"></i>);
		}
	}

    render = () => {
    	return (
    		<Box className={this.props.className}>
    			<p>{this.props.contents}</p>
    			{this.getArrow()}
    		</Box>
    	);
    }
}

export default Label;