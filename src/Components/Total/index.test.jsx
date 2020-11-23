import React from 'react';
import { shallow } from 'enzyme';
import Total from './index';
import { Store } from 'Store';

test('Render Build Total Snapshot', () => {
  const component = shallow(
    <Store>
      <Total />
    </Store>
  );
  expect(component).toMatchSnapshot();
});
