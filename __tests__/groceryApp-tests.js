jest.unmock('../ui/components/groceryApp');

import GroceryApp from '../ui/components/groceryApp';
import {mount} from 'enzyme';
import React from 'react';
describe('GroceryApp tests', () => {
	const list = [
		"one",
		"two"
	];
	let wrapper = mount(
		<GroceryApp
			list={list} />
	);
	it('Should render one list item per item in the list prop', () => {
		expect(wrapper.find('li').length).toBe(list.length);
	});
	it('Should remove an item when deleteItem() is executed', () => {
		wrapper.instance().deleteItem("one");
		expect(list).toEqual(['two']);
	});
	it('Should add an item when createItem() is executed', () => {
		wrapper.instance().setState({value: 'three'});
		wrapper.instance().createItem();
		expect(list).toEqual(['two','three']);
	});
	it('Should filter array when handleChange() is executed', () => {
		// wrapper.instance().setState({value: 'tw'});
		wrapper.find('input').simulate('change', {
			target: {
				value: 'tw'
			}
		});
		expect(wrapper.find('li').length).toEqual(1);
	});
});