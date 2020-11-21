import { Input } from 'Styles';
import { Root, Text } from './styles';

const SearchBar = () => {
	return (
		<Root>
			<Text>Procurar um livro:</Text>
			<Input />
		</Root>
	);
};

SearchBar.defaultProps = {
	theme: {
		color: {
			basic: {
				black: '#0c0c0c',
				white: '#fff',
			},
		},
	},
};

export default SearchBar;
