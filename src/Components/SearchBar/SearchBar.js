import React from 'react';
import {MainBox, SearchBox, IconBox} from './SearchBarCSS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;

		this.state = {
			contents: "",
		};
	}

	updateSearchBox = (e) => {
		this.setState({contents: e.target.value});
	}

	render = () => {
		return (
			<MainBox className={this.props.className} onKeyPress={(e) => {
				if (this.props.clicked && e.key === 'Enter') {
					this.props.clicked(this.state.contents);
				}
			}}>
				<IconBox onClick={this.props.clicked && this.contents ? this.props.clicked(this.contents) : null}>
					<FontAwesomeIcon icon={faSearch} onClick={() => {
						if (this.props.clicked && this.contents) {
							this.props.clicked(this.contents);
						}
					}}/>
				</IconBox>
				<SearchBox value={this.state.contents} type="text" onChange={this.updateSearchBox}/>
			</MainBox>
		);
	}
}

export default SearchBar;