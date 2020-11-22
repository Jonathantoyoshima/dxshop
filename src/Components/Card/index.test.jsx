import React from 'react';
import renderer from 'react-test-renderer';
import Card from './index';

test('Render Build Card Snapshot', () => {
  const component = renderer.create(<Card />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});