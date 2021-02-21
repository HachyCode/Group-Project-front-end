import React from 'react';
import styled from 'styled-components';
import NewsBox from '../Components/NewsBox';

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

const StyledNewsBox = styled(NewsBox)`
    margin-left: 15vw;
    margin-right: 15vw;
    margin-bottom: 1.5em;
`;

const NewsScrollIcon = styled.img`
    position: fixed;
    bottom: 1em;
    left: 45%;
`;

function Home() {
    const news = { 
        1: {
            heading: "This is News",
            paragraph: "According to recent research, this is news! Very nicely written news that is very epic and written by someone. According to all the known laws of aviation, there is no way a bee should be able to fly. Its tiny wings are simply too small for its fat little body to get off the ground.",
            date: "04/20/1337",
            image: "",
            alt: "test",
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
        },
        5: {
            heading: "Sample Text",
            paragraph: "Lorem ipusm",
            date: "1/2/3456",
            image: "",
            alt: "test2",
        }
    };
    function generateNews() {
        let newsToGenerate = [];
        for (let i = 1; i <= Object.keys(news).length; i++) {
            let currNews = news[i];

            if (currNews.heading !== "") {
                let isNewsRed = i < 3 ? "true" : "";
                console.log(isNewsRed);
                newsToGenerate.push((<StyledNewsBox heading={currNews.heading} paragraph={currNews.paragraph} date={currNews.date} image={currNews.image} alt={currNews.alt} isRed={isNewsRed}/>));
            }
        }

        if (newsToGenerate.length > 4) {
            newsToGenerate.push(<NewsScrollIcon alt="scroll down"/>)
        }

        return newsToGenerate;
    }

    return (
        <MainBox>
            {/*Daniel*/}
            <TopBox>
                <TopBoxImage alt="logo"/>
                <TopBoxTextContainer>
                    <p>News Text Goes Here</p>
                </TopBoxTextContainer>
            </TopBox>
            {/*<StyledNewsBox heading="This is News" paragraph="According to recent research, this is news! Very nicely written news that is very epic and written by someone. According to all the known laws of aviation, there is no way a bee should be able to fly. Its tiny wings are simply too small for its fat little body to get off the ground." date="04/20/1337" alt="test" isRed="true"/>*/}
            {generateNews()}
        </MainBox>
    )
}

export default Home
