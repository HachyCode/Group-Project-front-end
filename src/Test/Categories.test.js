import React from 'react';
import Categories from '../Pages/Categories';
import {render, cleanup} from '@testing-library/react';

afterEach(cleanup);
test('render Categories', () => { 
	render (<Categories/>)
})