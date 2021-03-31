import React from 'react';
import StatusBar from '../StatusBar/StatusBar';
import { withRouter } from 'react-router-dom';
import {Box, POIDSections, SupplierSections} from './POListingCSS';
import {eventBus, StatusBarShouldUpdate} from '../../EventBus';

class POListing extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	componentDidMount = () => {
		eventBus.on(StatusBarShouldUpdate, this.forceUpdate);
	}

	componentWillUnmount = () => {
		eventBus.off(StatusBarShouldUpdate, this.forceUpdate);
	}

	goToPoForm = () => {
		this.props.history.push({
			pathname: "/poForm",
			//search: "", TODO: have IDs for POForms
			state: {
				poID: this.props.poID,
				supplier: this.props.supplier,
				progress: this.props.progress,
			} //TEMP: replace with a POForm ID later
		});
	}

    render = () => {
    	return (
    		<Box className = {this.props.className} onClick={this.goToPoForm}>
    			<POIDSections>
    				{this.props.poID}
    			</POIDSections>
    			<SupplierSections>
    				{this.props.supplier}
    			</SupplierSections>
    			<StatusBar barID={this.props.barID} progress={this.props.progress}/>
    		</Box>
    	);
    }
}

export default withRouter(POListing);