import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Styles';
import Shop from './index';

test('Render Build Shop Snapshot', () => {
  const component = shallow(
    <ThemeProvider theme={theme}>
      <Shop />
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot();
});
