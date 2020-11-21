import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Styles';
import SearchBar from './index';

test('Render Build SearchBar Snapshot', () => {
	const component = renderer.create(
		<ThemeProvider theme={theme}>
			<SearchBar />
		</ThemeProvider>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
