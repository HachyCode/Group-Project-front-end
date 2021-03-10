import React from 'react';
import {
	FilledDot, 
	EmptyDot, 
	EmptyLine, 
	FilledLine, 
	MainDiv
} from './StatusBarCSS';
import {eventBus, StatusBarShouldUpdate} from '../../EventBus';

class StatusBar extends React.Component {
	constructor(props) {
		super(props);

		//this.colours = [ "purple", "pink", "red", "orange", "green" ];

		this.state = {
			progress: props.progress,
			filler: 0,
		};
	}

	componentDidMount() {
		eventBus.on(StatusBarShouldUpdate, () => {this.setState({filler: this.state.filler + 1});});
	}

    generateBar = () => {
    	let barComponents = [];
    	for (let i = 0; i < 5; i++) {
    		if (this.state.progress >= i + 1) {
    			barComponents.push(<FilledDot/>);
    			barComponents.push(<FilledLine/>);
    		} else {
    			barComponents.push(<EmptyDot/>);
    			barComponents.push(<EmptyLine/>);
    		}
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