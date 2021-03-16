import React from 'react';
import NewsContainer from '../Components/NewsContainer/NewsContainer';
import {
	MainBox, 
	TopBox, 
	TopBoxImage, 
	TopBoxTextContainer
} from '../Components/PageCSS/HomeCSS';
import Logo from '../Images/Logo/black_logo.png';

function Home() {
	const news = { 
		0: {
			heading: "Authorisation needed",
			paragraph: "PoForm ID:_________ needs you authorisation",
			date: "07/12/2022",
			image:"../../Images/HomeNotificationImages/authorisation.jpg",
			alt: "authorisation",
		}, 
		1: {
			heading: "Supplier selectino needed",
			paragraph: "You need to specificate the supplier on PoForm ID:_________",
			date: "07/12/2022",
			image:"../../Images/HomeNotificationImages/authorisation.jpg",
			alt: "supplierSelectino",
		}, 
		2: {
			heading: "Item quantity required",
			paragraph: "PoForm ID:_________ ,item ID:_________ quantity required",
			date: "07/12/2022",
			image:"../../Images/HomeNotificationImages/authorisation.jpg",
			alt: "itemQuantity",
		}, 
		3: {
			heading: "PoForm ready to be send",
			paragraph: "PoForm ID:_________ are ready to be send to make a order",
			date: "07/12/2022",
			image: "../../Images/HomeNotificationImages/authorisation.jpg",
			alt: "send",
		},
		4: {
			heading: "Low on supplies",
			paragraph: "item ID:_________ are low on supplies",
			date: "07/12/2022",
			image: "../../Images/HomeNotificationImages/authorisation.jpg",
			alt: "LowSupplies",
		}
	};

	return (
		<MainBox>
			<TopBox>
				<TopBoxImage alt="logo" src={Logo}/>
				<TopBoxTextContainer>
					"Wear a mask, so you could save the world"
					-Batman
				</TopBoxTextContainer>
			</TopBox>
			<NewsContainer news={news}/>
		</MainBox>
	);
}

export default Home;
