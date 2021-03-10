import React from 'react';
import {eventBus, NewsBoxClick, NewsBoxDelete} from '../../EventBus';
import {
	BorderBox, 
	MainBox, 
	NewsImage,
	NewsBoxMain, 
	NewsHeader, 
	NewsParagraph, 
	DateArea, 
	Date, 
	XButton
} from './NewsBoxCSS';
import image from '../../Images/HomeNotificationImages/authorisation.jpg';

class NewsBox extends React.Component {
	constructor(props) {
		super(props);
		eventBus.on(NewsBoxClick, (data) => { if (data.sender !== this && this.state.isSelected) this.toggleSelected(false);});
		this.props = props;
		let paragraph = props.paragraph.slice(0, 220);

		this.state = {
			heading: props.heading,
			paragraph: paragraph,
			date: props.date,
			image: props.image,
			alt: props.alt,
			isRed: props.isRed,
			isSelected: false,
		};
	}

    getColour = () => {
    	return this.state.isSelected ? "orange" : (this.state.isRed === "true" ? "crimson" : "black");
    }

    toggleSelected = (emit = true) => {
    	if (emit) eventBus.emit(NewsBoxClick, { sender: this });
    	this.setState({isSelected: !this.state.isSelected});
    }

    genDeleteButton = () => {
    	if (this.state.isSelected) {
    		return (<XButton onClick={() => {eventBus.emit(NewsBoxDelete, {box: this});}}><img alt="xButton"/></XButton>);
    	}
    }

    delete = () => {
    	this.props.onDelete();
    }

    render = () => {
    	return (
    		<BorderBox colour={this.getColour} className={this.props.className}>
    			<MainBox onClick={this.toggleSelected}>
    				<NewsImage src={this.props.image} alt={this.props.alt}/>
    				<NewsBoxMain>
    					<NewsHeader>{this.props.heading}</NewsHeader>
    					<NewsParagraph>{this.props.paragraph}</NewsParagraph>
    				</NewsBoxMain>
    				<DateArea>
    					<Date>{this.props.date}</Date>
    				</DateArea>
    			</MainBox>

    			{ this.state.isSelected ? this.genDeleteButton() : ""}
    		</BorderBox>
    	);
    }
}

export default NewsBox;