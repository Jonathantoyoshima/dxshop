import { Input } from 'Styles';
import { Root } from './styles';

const SearchBar = () => {
	return (
		<Root>
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
