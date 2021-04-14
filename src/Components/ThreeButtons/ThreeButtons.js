import React from 'react';
import {Btn, BtnBox, LeftBtn, RightBtn} from './ThreeButtonsCSS';
import {eventBus, POFormDone, POFormSave} from '../../EventBus';

function ThreeButtons() {
	return (
		<div>
			<BtnBox>
				<LeftBtn>
					<Btn onClick={() => {eventBus.emit(POFormDone);}}>Done</Btn>
				</LeftBtn>
				<RightBtn>
					<Btn>Send</Btn>
					<Btn onClick={() => {eventBus.emit(POFormSave);}}>Save</Btn>
				</RightBtn>
			</BtnBox>
		</div>
	);
}

export default ThreeButtons;
