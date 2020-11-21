import React from 'react';
import renderer from 'react-test-renderer';
import Total from './index';

test('Render Build Total Snapshot', () => {
  const component = renderer.create(<Total />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
