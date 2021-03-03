import React from 'react';
import {Box} from './LabelCSS';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

class Label extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	getArrow = () => {
		if (this.props.arrow) {
			return (<FontAwesomeIcon icon={faAngleDown}/>);
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