import React from 'react';
import StatusBar from '../StatusBar/StatusBar';
import { withRouter } from 'react-router-dom';
import {Box, FirstTwoSections} from './POListingCSS';
import {eventBus, StatusBarShouldUpdate} from '../../EventBus';

class POListing extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	componentDidMount() {
		eventBus.on(StatusBarShouldUpdate, () => {this.forceUpdate();});
	}

    render = () => {
    	return (
    		<Box className = {this.props.className} onClick={() => this.props.history.push("/poForm")}>
    			<FirstTwoSections>
    				{this.props.poID}
    			</FirstTwoSections>
    			<FirstTwoSections>
    				{this.props.supplier}
    			</FirstTwoSections>
    			<StatusBar progress={this.props.progress}/>
    		</Box>
    	);
    }
}

export default withRouter(POListing);