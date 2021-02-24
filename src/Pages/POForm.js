import React from 'react'
import Address from '../Components/AddressBar/AddressBar'
import ThreeButtons from '../Components/ThreeButtons/ThreeButtons'
import Logo from '../Components/Logo/Logo'
import MainPoInfo from '../Components/MainPoInfo/MainPoInfo'
import {MainInfoBox} from '../Components/PoForm/PoFormCSS'

function POForm() {
    return (
        <div> {/*Viktorija*/}
            <ThreeButtons/>
            <MainInfoBox>
                <Logo/>
                <MainPoInfo/>
            </MainInfoBox>
            <Address/>
        </div>
    )
}

export default POForm
