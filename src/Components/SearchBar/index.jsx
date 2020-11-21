import { Select } from 'Styles';
import { Root } from './styles';

const SearchBar = () => {
  return (
    <Root>
      <Select>
        <option>Selecione aqui uma categoria</option>
      </Select>
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
