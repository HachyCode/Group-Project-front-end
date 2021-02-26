import React from 'react';
import {AuthorisationBox, Box, Text, Date} from './AuthorisationCSS';

function Authorisation() {
    return (
        <div>
            <AuthorisationBox>
                <Box>
                    <Text>Jonson's Authorisation</Text>
                    <Date type="date"/>
                </Box>
                <Box>
                    <Text>Ann's Authorisation</Text>
                    <Date type="date"/>
                </Box>
            </AuthorisationBox>
        </div>
    )
}

export default Authorisation
