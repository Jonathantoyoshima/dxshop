import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow } from 'enzyme';
import { theme } from 'Styles';
import Checkout from './index';

test('Render Build Checkout Snapshot', () => {
  const component = shallow(
    <ThemeProvider theme={theme}>
      <Checkout />
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot();
});
