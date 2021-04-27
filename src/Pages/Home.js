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
			paragraph: "PoForm ID:_________ needs your authorisation",
			date: "07/12/2022",
			image:"../../Images/HomeNotificationImages/authorisation.jpg",
			alt: "authorisation",
			annOrJasonOnly: true
		}, 
		1: {
			heading: "Supplier selection needed",
			paragraph: "You need to specify the supplier on PoForm with ID:_________",
			date: "07/12/2022",
			image:"../../Images/HomeNotificationImages/authorisation.jpg",
			alt: "supplierSelectino",
		}, 
		2: {
			heading: "Item quantity required",
			paragraph: "PoForm ID:_________ : Item with ID:_________ requires a quantity",
			date: "07/12/2022",
			image:"../../Images/HomeNotificationImages/authorisation.jpg",
			alt: "itemQuantity",
		}, 
		3: {
			heading: "PoForm ready to be sent",
			paragraph: "PoForm ID:_________ is ready to be sent to make a order",
			date: "07/12/2022",
			image: "../../Images/HomeNotificationImages/authorisation.jpg",
			alt: "send",
			annOrJasonOnly: true
		},
		4: {
			heading: "Item low on stock",
			paragraph: "Item with ID:_________ is running low on stock",
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
