import React from 'react'
import {Btn, BtnBox, LeftBtn, RightBtn} from './ThreeButtonsCSS'

function ThreeButtons() {
    return (
        <div>
            <BtnBox>
                <LeftBtn>
                    <Btn>Done</Btn>
                </LeftBtn>
                <RightBtn>
                    <Btn>Send</Btn>
                    <Btn>Save</Btn>
                </RightBtn>
            </BtnBox>
        </div>
    )
}

export default ThreeButtons
