import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './index';
import { Store } from 'Store';

test('Render Build SearchBar Snapshot', () => {
  const component = shallow(
    <Store>
      <SearchBar />
    </Store>
  );
  expect(component).toMatchSnapshot();
});
