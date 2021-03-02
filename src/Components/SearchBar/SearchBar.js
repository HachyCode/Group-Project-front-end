import React from 'react';
import {MainBox, SearchBox} from './SearchBarCSS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

    render = () => {
    	return (
    		<MainBox className={this.props.className}>
    			<FontAwesomeIcon icon={faSearch}/>
    			<SearchBox type="text"/>
    		</MainBox>
    	);
    }
}

export default SearchBar;