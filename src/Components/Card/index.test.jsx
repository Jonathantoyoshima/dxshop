import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Styles';
import Card from './index';

test('Render Build Card Snapshot', () => {
	const component = renderer.create(
		<ThemeProvider theme={theme}>
			<Card />
		</ThemeProvider>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
