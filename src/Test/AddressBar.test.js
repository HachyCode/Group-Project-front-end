import React from 'react';
import ReactDOM from 'react-dom';
import Address from './../Components/AddressBar/AddressBar';
import {cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer'

afterEach(cleanup);
test("renders Home page", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Address>Gadgets for you</Address> , div
	)
})

test("mathches snapshot AddressBar", () => {
	const tree2 = renderer.create(
		<Address>Gadgets for you</Address>
	).toJSON();
	expect(tree2).toMatchSnapshot();
})