import React from 'react';
import {WarningBox} from './FixedWarningBoxCSS';
import {eventBus, WarningBoxVisibilityUpdate} from '../../EventBus';

//done as a class so it can update when I tell it to go invisible/visible
class FixedWarningBox extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;

		this.state = {
			visible: this.props.visible,
		};
	}

	componentDidMount = () => {
		eventBus.on(WarningBoxVisibilityUpdate, this.visibilityUpdate);
	}

	componentWillUnmount = () => {
		eventBus.off(WarningBoxVisibilityUpdate, this.visibilityUpdate);
	}

	visibilityUpdate = (data) => {
		this.setState({visible: data.visible});
	}

	render = () => {
		return (
			<WarningBox 
				top={this.props.top} 
				bottom={this.props.bottom}
				color={this.props.color}
				backgroundColor={this.props.backgroundColor}
				visible={this.state.visible}
			>{this.props.content}</WarningBox>
		);
	}
}

export default FixedWarningBox;