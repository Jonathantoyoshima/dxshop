import React from 'react';
import SearchBar from './index';
import { shallow } from 'enzyme';
import { Store } from 'Store';

test('Render Build SearchBar Snapshot', () => {
  const component = shallow(
    <Store>
      <SearchBar />
    </Store>
  );
  expect(component).toMatchSnapshot();
});
