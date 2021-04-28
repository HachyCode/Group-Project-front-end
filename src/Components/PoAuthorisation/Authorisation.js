import React from 'react';
import {
	AuthorisationBox, 
	Box, 
	Text, 
	Date
} from './AuthorisationCSS';
import {eventBus, POFormAnnApproved, POFormJohnApproved} from '../../EventBus';

function Authorisation(props) {
	return (
		<div>
			<AuthorisationBox>
				<Box>
					<Text>Johnson's Authorisation</Text>
					<Date type="date" onChange={(event) => {eventBus.emit(POFormAnnApproved, {date: event.target.value});}}/>
				</Box>
				<Box>
					<Text>Ann's Authorisation</Text>
					<Date type="date" onChange={(event) => {eventBus.emit(POFormJohnApproved, {date: event.target.value});}}/>
				</Box>
			</AuthorisationBox>
		</div>
	);
}

export default Authorisation;
