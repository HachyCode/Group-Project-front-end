import React from 'react';
import {eventBus, NewsBoxClick, NewsBoxDelete} from '../../EventBus';
import {
	MainBox, 
	NewsImage,
	NewsBoxMain, 
	NewsHeader, 
	NewsParagraph, 
	DateArea, 
	Date, 
	XButton,
	XIcon,
	InfoIcon,
	InfoIconBox
} from './NewsBoxCSS';
import {faExclamationTriangle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import Image from '../../Images/HomeNotificationImages/404error.jpg';

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
		return this.state.isSelected ? "#9D4EDD" : (this.state.isRed === "true" ? "#FF9E00" : "#ADB5BD");
	}	
	toggleSelected = (emit = true) => {
		if (emit) eventBus.emit(NewsBoxClick, { sender: this });
		this.setState({isSelected: !this.state.isSelected});
	}	
	genDeleteButton = () => {
		if (this.state.isSelected) {
			return (<XButton onClick={() => {eventBus.emit(NewsBoxDelete, {box: this});}}>
				<XIcon icon={faTimesCircle}/></XButton>);
		}
	}	
	delete = () => {
		this.props.onDelete();
	}

	newIcon = () => {
		if (this.state.isRed === "true"){
			return "#FF9E00";
		}else {
			return "transparent";
		}
	}

	render = () => {
		return (
			<MainBox onClick={this.toggleSelected} className={this.props.className} colour={this.getColour}>
				<InfoIconBox>
					<InfoIcon icon={faExclamationTriangle} newIcon={this.newIcon}/>
				</InfoIconBox>
				<NewsImage src={Image} alt={this.props.alt}/>
				<NewsBoxMain>
					<NewsHeader>{this.props.heading}</NewsHeader>
					<NewsParagraph>{this.props.paragraph}</NewsParagraph>
				</NewsBoxMain>
				<DateArea>
					<Date>{this.props.date}</Date>
				</DateArea>
				{/*{ this.state.isSelected ? this.genDeleteButton() : ""}*/}
				<XButton onClick={() => {eventBus.emit(NewsBoxDelete, {box: this});}} colour={this.getColour}>
					<XIcon icon={faTimesCircle}/>
				</XButton>
			</MainBox>
		);
	}
}

export default NewsBox;