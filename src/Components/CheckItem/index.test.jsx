import React from 'react';
import { shallow } from 'enzyme';
import { Store } from 'Store';
import CheckItem from './index';

test('Render Build CheckItem Snapshot', () => {
  const component = shallow(
    <Store>
      <CheckItem />
    </Store>
  );
  expect(component).toMatchSnapshot();
});
