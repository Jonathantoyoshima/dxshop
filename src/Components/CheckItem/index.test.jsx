import React from 'react';
import renderer from 'react-test-renderer';
import CheckItems from './index';

test('Render Build Check Items Snapshot', () => {
	const component = renderer.create(<CheckItems />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
