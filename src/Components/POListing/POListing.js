import React from 'react';
import StatusBar from '../StatusBar/StatusBar';
import { withRouter } from 'react-router-dom';
import {Box, POIDSections, SupplierSections} from './POListingCSS';
import {eventBus, StatusBarShouldUpdate} from '../../EventBus';
import {hasPermission, SeeActivePOs} from '../../Permissions';
import {currentUser} from '../../Data/UserData';

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
		//const self = this;
		//currentUser.then((response) => {
		// 	const permissions = response["data"]["Permissions"];
		// 	if (hasPermission(permissions, SeeActivePOs)) {
		// 		self.props.history.push({
		// 			pathname: "/poForm",
		// 			//search: "", TODO: have IDs for POForms
		// 			state: {
		// 				poID: self.props.poID,
		// 				supplier: self.props.supplier,
		// 				progress: self.props.progress,
		// 				orderItems: self.props.orderItems
		// 			} //TEMP: replace with a POForm ID later
		// 		});
		// 	}

		// });
		this.props.history.push({
			pathname: "/poForm",
			//search: "", TODO: have IDs for POForms
			state: {
				poID: this.props.poID,
				supplier: this.props.supplier,
				progress: this.props.progress,
				orderItems: this.props.orderItems,
				saName: this.props.saName,
				saID: this.props.saID,
				johnAuthDate: this.props.johnAuthDate,
				annAuthDate: this.props.annAuthDate
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
    				{this.props.supplier ? this.props.supplier : "-"}
    			</SupplierSections>
    			<StatusBar barID={this.props.barID} progress={this.props.progress}/>
    		</Box>
    	);
    }
}

export default withRouter(POListing);