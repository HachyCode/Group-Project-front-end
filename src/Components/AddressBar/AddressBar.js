import React from 'react'
import {Address, AddressBox, AddressDiv} from './AddressBarCSS'

function AddressBar() {
    return (
        <div>{/*Viktorija*/}
            <AddressDiv>

                <AddressBox>
                    <Address>Gadgets For You</Address>
                    <Address>Address</Address>
                    <Address>144 Number Street</Address>
                    <Address>Post Code</Address>
                </AddressBox>
            

                <AddressBox>
                    <Address>
                        Gadgets For You
                        {/* Need to have a selection of suppiers */}
                    </Address>
                    <Address>
                        Address
                        {/* Will depend on selection of suppiers */}
                    </Address>
                    <Address>
                        144 Number Street
                        {/* Will depend on selection of suppiers */}
                    </Address>
                    <Address>
                        Post Code
                        {/* Will depend on selection of suppiers */}
                    </Address>
                </AddressBox>

            </AddressDiv>
        </div>
    )
}

export default AddressBar
