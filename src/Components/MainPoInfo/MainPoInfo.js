import React from 'react'
import {InfoBox, Box, Text, Input} from './MainPoInfoCSS'

function MainPoInfo() {
    return (
        <div>
            <InfoBox>
                <Box>
                    <Text>SA Name: </Text>
                    <Input/>
                </Box>
                <Box>
                    <Text>SA ID: </Text>
                    <Input/>
                </Box>
                <Box>
                    <Text>PO Form ID: </Text>
                    <Input/>
                </Box>
            </InfoBox>
        </div>
    )
}

export default MainPoInfo
