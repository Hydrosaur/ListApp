jest.unmock('../ui/components/listApp');

import ListApp from '../ui/components/listApp';
import {mount} from 'enzyme';
import React from 'react';
describe('ListApp tests', () => {
	const list = [
		"one",
		"two"
	];
	let wrapper = mount(
		<ListApp
			list={list}
			regexpat={/on/g}
		/>
	);
	it('Should render filtered elements', () => {
		let wrappertwo = mount(
			<ListApp
				list={list}
				regexpat={new RegExp("", "g")}
			/>
		);
		expect(wrappertwo.find('li').length).toEqual(2);
	});
	it('Should filter and return a filtered list', () => {
		expect(wrapper.instance().filterList(list)).toEqual(["one"]);
	});
});