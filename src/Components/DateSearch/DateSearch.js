import React from 'react';
import {OutlineBox, StyledInputBox} from './DateSearchCSS';

class DateSearch extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

    render = () => {
    	return (
    		<OutlineBox className={this.props.className}>
    			<i class="fas fa-calendar"/>
    			<StyledInputBox default="DD/MM/YYYY"/>
    		</OutlineBox>
    	);
    }
}

export default DateSearch;