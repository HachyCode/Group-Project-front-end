import React from 'react';
import ReactDOM from 'react-dom';
import TopBoxTextContainer from './../Pages/Home';
import {cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer'

afterEach(cleanup);
test("renders Home page", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<TopBoxTextContainer>
			"Wear a mask, so you could save the world"
			-Batman
		</TopBoxTextContainer> , div
	)
})

test("mathches snapshot", () => {
	const tree = renderer.create(
		<TopBoxTextContainer>
			"Wear a mask, so you could save the world"
			-Batman
		</TopBoxTextContainer>
	).toJSON();
	expect(tree).toMatchSnapshot();
})