import React from 'react'
import {InfoBox, SaNameBox, SaIdBox, FormIdBox, Text, Input} from './MainPoInfoCSS'

function MainPoInfo() {
    return (
        <div>
            <InfoBox>
                <SaNameBox>
                    <Text>SA Name: </Text>
                    <Input/>
                </SaNameBox>
                <SaIdBox>
                    <Text>SA ID: </Text>
                    <Input/>
                </SaIdBox>
                <FormIdBox>
                    <Text>PO Form ID: </Text>
                    <Input/>
                </FormIdBox>
            </InfoBox>
        </div>
    )
}

export default MainPoInfo
