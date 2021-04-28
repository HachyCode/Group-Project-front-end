import React from 'react';
import LogOff from '../Pages/LogOff';
import {render, cleanup} from '@testing-library/react';

afterEach(cleanup);
it('render LogOff', () => { 
	render (<LogOff/>)
})