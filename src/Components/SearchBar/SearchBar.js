import React from 'react';
import {MainBox, SearchBox, IconBox} from './SearchBarCSS';
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
				<IconBox>
					<FontAwesomeIcon icon={faSearch}/>
				</IconBox>
				<SearchBox type="text"/>
			</MainBox>
		);
	}
}

export default SearchBar;