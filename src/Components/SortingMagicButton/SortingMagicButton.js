import React from 'react';
//TODO: maybe move the label box CSS somewhere else?
import {Box} from '../Label/LabelCSS';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp, faDotCircle} from '@fortawesome/free-solid-svg-icons';
import {eventBus, SortingUpdate} from '../../EventBus';

export const unsorted = 0;
export const descending = 1;
export const ascending = 2;

/*
props:
	sorting - use above consts
	name - string name of button
	sortID - id of the sorting event this fires on click
*/
//I mean it's not really magic but that's what Vika calling them so
class SortingMagicButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			//0 for unsorted, 1 for descending, 2 for ascending
			sortingDirection: this.props.sorting ? this.props.sorting : descending,
		};
	}

	getArrow = () => {
		if (this.state.sortingDirection === unsorted) {
			return (<FontAwesomeIcon icon={faDotCircle}/>);
		} else if (this.state.sortingDirection === descending) {
			return (<FontAwesomeIcon icon={faAngleDown}/>);
		} else {
			return (<FontAwesomeIcon icon={faAngleUp}/>);
		}
	}

	click = () => {
		this.setState({sortingDirection: (this.state.sortingDirection === descending ? ascending : descending)});
		eventBus.emit(SortingUpdate, {sortingID: this.props.sortingID, sortDirection: this.state.sortingDirection});
	}

	render = () => {
		return (
			<Box onClick={this.click}>
				{this.props.name}
				{this.getArrow()}
			</Box>
		);
	}
}

export default SortingMagicButton;