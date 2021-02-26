import React from 'react';
import {Box} from './LabelCSS';

class Label extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

    render = () => {
    	return (
    		<Box className={this.props.className}>
    			<p>{this.props.contents}</p>
    		</Box>
    	);
    }
}

export default Label;