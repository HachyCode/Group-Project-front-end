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
					<Date 
						type="date" 
						onChange={(event) => {eventBus.emit(POFormJohnApproved, {date: event.target.value});}}
						value={props.poItem.johnAuthDate ? props.poItem.johnAuthDate.slice(0, 10) : null}
					/>
				</Box>
				<Box>
					<Text>Ann's Authorisation</Text>
					<Date 
						type="date" 
						onChange={(event) => {eventBus.emit(POFormAnnApproved, {date: event.target.value});}}
						value={props.poItem.annAuthDate ? props.poItem.annAuthDate.slice(0, 10) : null}
					/>
				</Box>
			</AuthorisationBox>
		</div>
	);
}

export default Authorisation;
