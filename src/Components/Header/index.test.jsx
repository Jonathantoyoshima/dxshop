import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Styles';
import Header from './index';

test('Render Build Header Snapshot', () => {
	const component = renderer.create(
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
