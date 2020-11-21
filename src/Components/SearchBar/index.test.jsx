import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from './index';

test('Render Build SearchBar Snapshot', () => {
	const component = renderer.create(<SearchBar />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
