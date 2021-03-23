import React from 'react';
import { eventBus, NewsBoxDelete } from '../../EventBus';
import {StyledNewsBox, NewsScrollIcon} from './NewsContainerCSS';

class NewsContainer extends React.Component {
	constructor(props) {
		super(props);

		this.newsByIndex = {};
		this.deletedNewsIndexes = [];

		this.state = {
			news: this.props.news,  
		};
	}

	componentDidMount = () => {
		eventBus.on(NewsBoxDelete, this.deleteEventTriggered);
	}

	componentWillUnmount = () => {
		eventBus.off(NewsBoxDelete, this.deleteEventTriggered);
	}

	deleteEventTriggered = (data) => {
		this.deletedNewsIndexes.push(data.id);
		this.setState({});
	}

    generateNews = () => {
    	console.log("generate");
    	let newsToGenerate = [];
    	let counted = 0;

    	for (let i = 0; i < Object.keys(this.state.news).length; i++) {
    		if (!this.deletedNewsIndexes.includes(i)) {
    			const currNews = this.state.news[i];

    			if (currNews.heading !== "") {
    				const isNewsRed = counted < 2 ? "true" : "";
    				const newsBox = (<StyledNewsBox
    					heading={currNews.heading}
    					paragraph={currNews.paragraph}
    					date={currNews.date}
    					image={currNews.image}
    					alt={currNews.alt}
    					isRed={isNewsRed}
    					onDelete={() => {
    						this.deletedNewsIndexes.push(i);
    						this.setState({});
    					}}
    					//key={i}
    					newsID={i}/>);
    				newsToGenerate.push(newsBox);
    			}

    			counted++;
    		}
    	}

    	if (newsToGenerate.length > 4) {
    		newsToGenerate.push(<NewsScrollIcon alt="scroll down"/>);
    	}

    	return newsToGenerate;
    }

    render = () => {
    	return this.generateNews();
    }
}

export default NewsContainer;