import React from 'react';
import {
	AuthorisationBox, 
	Box, 
	Text, 
	Date
} from './AuthorisationCSS';

function Authorisation(props) {
	return (
		<div>
			<AuthorisationBox>
				<Box>
					<Text>Johnson's Authorisation</Text>
					<Date type="date"/>
				</Box>
				<Box>
					<Text>Ann's Authorisation</Text>
					<Date type="date"/>
				</Box>
			</AuthorisationBox>
		</div>
	);
}

export default Authorisation;
