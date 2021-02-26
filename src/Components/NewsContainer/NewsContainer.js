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

		eventBus.on(NewsBoxDelete, (data) => {this.deletedNewsIndexes.push(this.newsByIndex[data.box]); this.setState({});});

	}

    generateNews = () => {
    	console.log("generate");
    	let newsToGenerate = [];
    	for (let i = 0; i < Object.keys(this.state.news).length; i++) {
    		if (!this.deletedNewsIndexes.includes(i)) {
    			let currNews = this.state.news[i];

    			if (currNews.heading !== "") {
    				let isNewsRed = i < 2 ? "true" : "";
    				let newsBox = (<StyledNewsBox 
    					heading={currNews.heading} 
    					paragraph={currNews.paragraph}
    					date={currNews.date} 
    					image={currNews.image} 
    					alt={currNews.alt} 
    					isRed={isNewsRed} 
    					onDelete={() => {this.deletedNewsIndexes.push(i); this.setState({});}}
    					key={i}/>);
    				newsToGenerate.push(newsBox);
    				this.newsByIndex[newsBox] = i;
    			}
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