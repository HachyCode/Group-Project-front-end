import React from 'react';
import {Btn, BtnBox, LeftBtn, RightBtn} from './ThreeButtonsCSS';
import {eventBus, POFormDone, POFormSave, POFormSend} from '../../EventBus';

function ThreeButtons(props) {
	return (
		<div>
			<BtnBox>
				<LeftBtn>
					<Btn onClick={() => {eventBus.emit(POFormDone);}}>Done</Btn>
				</LeftBtn>
				<RightBtn>
					<Btn onClick={() => {eventBus.emit(POFormSend);}}>Send</Btn>
					<Btn onClick={() => {eventBus.emit(POFormSave);}}>Save</Btn>
				</RightBtn>
			</BtnBox>
		</div>
	);
}

export default ThreeButtons;
