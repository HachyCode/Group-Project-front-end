import React from 'react';
import {MainBox, SearchBox} from './SearchBarCSS';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

    render = () => {
    	return (
    		<MainBox className={this.props.className}>
    			<i class="fas fa-search"></i>
    			<SearchBox type="text"/>
    		</MainBox>
    	);
    }
}

export default SearchBar;