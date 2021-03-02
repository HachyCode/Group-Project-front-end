import React from 'react';
import {OutlineBox, StyledInputBox} from './DateSearchCSS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';

class DateSearch extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

    render = () => {
    	return (
    		<OutlineBox className={this.props.className}>
    			<FontAwesomeIcon icon={faCalendar}/>
    			<StyledInputBox default="DD/MM/YYYY"/>
    		</OutlineBox>
    	);
    }
}

export default DateSearch;