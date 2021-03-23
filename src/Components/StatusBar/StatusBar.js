import React from 'react';
import {
	FilledDot, 
	EmptyDot, 
	EmptyLine, 
	MainDiv
} from './StatusBarCSS';
import {eventBus, StatusBarShouldUpdate} from '../../EventBus';

class StatusBar extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;

		this.state = {
			progress: props.progress,
		};
	}

	componentDidMount() {
		eventBus.on(StatusBarShouldUpdate, this.updateProgress);
	}

	componentWillUnmount() {
		eventBus.off(StatusBarShouldUpdate, this.updateProgress);
	}

	updateProgress = (data) => {
		this.setState({
			progress: data.poListingData[this.props.barID].progress
		});
	}

    generateBar = () => {
    	let barComponents = [];
    	for (let i = 0; i < 5; i++) {
    		if (this.state.progress >= i + 1) {
    			barComponents.push(<FilledDot/>);
    		} else {
    			barComponents.push(<EmptyDot/>);
    		}

    		barComponents.push(<EmptyLine/>);
    	}

    	//add final dot
    	if (this.state.progress >= 6) {
    		barComponents.push(<FilledDot/>);
    	} else {
    		barComponents.push(<EmptyDot/>);
    	}

    	return barComponents;
    }

    render = () => {
    	return (
    		<MainDiv>
    			{this.generateBar()}
    		</MainDiv>
    	);
    }
}

export default StatusBar;