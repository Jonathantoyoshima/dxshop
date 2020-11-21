import React from 'react';
import renderer from 'react-test-renderer';
import Amount from './index';

test('Render Build Amount Snapshot', () => {
	const component = renderer.create(<Amount />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
