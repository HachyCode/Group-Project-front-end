import React from 'react';
import styled from 'styled-components';
import NewsContainer from '../Components/NewsContainer/NewsContainer';

const MainBox = styled.div`
    padding: 1em;
`;
const TopBox = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 2em;
    display: flex;
    flex-direction: row;
    padding: 0.5em;
`;
const TopBoxImage = styled.img`
    height: 4em;
    width: 8em;
`;
const TopBoxTextContainer = styled.div`
    display: flex;
    align-items: center;
`;

function Home() {
	const news = { 
		0: {
			heading: "This is News",
			paragraph: "According to recent research, this is news! Very nicely written news that is very" + 
			"epic and written by someone. According to all the known laws of aviation, there is no way a bee" + 
			"should be able to fly. Its tiny wings are simply too small for its fat little body to get off the ground.",
			date: "04/20/1337",
			image: "",
			alt: "test",
		}, 
		1: {
			heading: "Sample Text",
			paragraph: "Lorem ipusm",
			date: "1/2/3456",
			image: "",
			alt: "test2",
		}, 
		2: {
			heading: "Sample Text",
			paragraph: "Lorem ipusm",
			date: "1/2/3456",
			image: "",
			alt: "test2",
		}, 
		3: {
			heading: "Sample Text",
			paragraph: "Lorem ipusm",
			date: "1/2/3456",
			image: "",
			alt: "test2",
		},
		4: {
			heading: "Sample Text",
			paragraph: "Lorem ipusm",
			date: "1/2/3456",
			image: "",
			alt: "test2",
		}
	};

	return (
		<MainBox>
			{/*Daniel*/}
			<TopBox>
				<TopBoxImage alt="logo"/>
				<TopBoxTextContainer>
					<p>News Text Goes Here</p>
				</TopBoxTextContainer>
			</TopBox>
			<NewsContainer news={news}/>
		</MainBox>
	);
}

export default Home;
