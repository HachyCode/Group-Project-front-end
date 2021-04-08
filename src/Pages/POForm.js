import React from 'react';
import Address from '../Components/AddressBar/AddressBar';
import ThreeButtons from '../Components/ThreeButtons/ThreeButtons';
import MainPoInfo from '../Components/MainPoInfo/MainPoInfo';
import {
	MainInfoBox, 
	TopMainBody, 
	FilterTop
} from '../Components/PageCSS/PoFormCSS';
import Orders from '../Components/PoOrders/PoOrders';
import Totals from '../Components/PoFormTotals/PoFormTotals';
import Authorisation from '../Components/PoAuthorisation/Authorisation';
import {
	SearchRow,
	SpacedLabel,
	FirstLabel,
	SecondLeftLabel,
	StyledPOListingArea,
	FirstLabelBox,
	SecondLeftLabelBox,
} from '../Components/PageCSS/POsCSS';
import {useLocation} from 'react-router';
import {getDataOfCurrentUser} from '../Data/UserData';
import Config from '../Config';
import {TopBoxImage} from '../Components/PageCSS/HomeCSS';
import Logo from '../Images/Logo/black_logo.png';

const currentUser = getDataOfCurrentUser();
const annOrJason = currentUser.username === Config.annID || 
	currentUser.username === Config.jasonID || 
	Config.developerAccountIDs.includes(currentUser.username);

function POForm() {
	const location = useLocation();
	let POListingData = false;
	if (location.state) {
		POListingData = [ 
			{
				poID: location.state.poID,
				supplier: location.state.supplier,
				progress: location.state.progress,
			}
		];
	} else {
		POListingData = [
			{
				poID: "0000 0007",
				supplier: "-",
				progress: 0,
			},
		];
	}

	return (
		<div> 
			<TopMainBody>
				<FilterTop>
					<SearchRow>
						{/*Add div bettween magic buttons*/}
						<FirstLabelBox>
							<FirstLabel name="PO ID" sortingID="poID"/>
						</FirstLabelBox>
						<SecondLeftLabelBox>
							<SecondLeftLabel name="Supplier" sortingID="supplier"/>
						</SecondLeftLabelBox>
						<SpacedLabel contents="All data"/>
						<SpacedLabel contents="Jason"/>
						<SpacedLabel contents="Ann"/>
						<SpacedLabel contents="Send"/>
						<SpacedLabel contents="Accepted"/>
						<SpacedLabel contents="Delivered"/>
					</SearchRow>
				</FilterTop>
				<StyledPOListingArea poListingData={POListingData}/>
			</TopMainBody>
			<ThreeButtons/>
			<MainInfoBox>
				<TopBoxImage alt="logo" src={Logo}/>
				<MainPoInfo ID = {location.state.poID}/>
			</MainInfoBox>
			<Address OrderSupplier = {location.state.supplier}/>
			<Orders/>
			<Totals/>
			<Authorisation/>
		</div>
	);
}

export default POForm;
