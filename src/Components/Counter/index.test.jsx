import React from 'react';
import Counter from './index';
import { shallow } from 'enzyme';
import { Store } from 'Store';

test('Render Build Counter Snapshot', () => {
  const component = shallow(
    <Store>
      <Counter />
    </Store>
  );
  expect(component).toMatchSnapshot();
});
