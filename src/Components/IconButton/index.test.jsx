import React from 'react';
// import {Router} from "react-router-dom";
import { shallow } from 'enzyme';
import IconButton from './index';
import Cart from 'Images/icon/cart.svg';

test('Render Build Icon Button Snapshot', () => {
  const component = shallow(<IconButton src={Cart} to={'/checkout'} />);
  expect(component).toMatchSnapshot();
});
