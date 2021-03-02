import React from 'react';
import Address from '../Components/AddressBar/AddressBar';
import ThreeButtons from '../Components/ThreeButtons/ThreeButtons';
import Logo from '../Components/Logo/Logo';
import MainPoInfo from '../Components/MainPoInfo/MainPoInfo';
import {MainInfoBox} from '../Components/PageCSS/PoFormCSS';
import Orders from '../Components/PoOrders/PoOrders';
import Totals from '../Components/PoFormTotals/PoFormTotals';
import Authorisation from '../Components/PoAuthorisation/Authorisation';

function POForm() {
	return (
		<div> {/*Viktorija*/}
			<ThreeButtons/>
			<MainInfoBox>
				<Logo/>
				<MainPoInfo/>
			</MainInfoBox>
			<Address/>
			<Orders/>
			<Totals/>
			<Authorisation/>
		</div>
	);
}

export default POForm;
