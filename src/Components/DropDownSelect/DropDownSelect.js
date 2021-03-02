import React from 'react';
import { BorderBox, Select } from './DropDownSelectCSS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

class DropDownSelect extends React.Component {
	constructor(props) {
		super(props);
		this.default = props.default;
		this.options = Array.isArray(props.options) && props.options ? props.options : [];
	}

    genOptions = () => {
    	let optionsResult = [];
    	optionsResult.push(<option disabled selected>{this.default}</option>);
    	for (const option of this.options) {
    		optionsResult.push(<option value={option}>{option}</option>);
    	}
    	return optionsResult;
    }

    render = () => {
    	return (
    		<BorderBox className={this.props.className}>
    			<Select>
    				{this.genOptions()}
    			</Select>
    			<FontAwesomeIcon icon={faAngleDown}/>
    		</BorderBox>
    	);
    }
}

export default DropDownSelect;