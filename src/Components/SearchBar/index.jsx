import React from 'react';
import { Select } from 'Styles';
import { Root } from './styles';
import { StoreContext } from 'Store';

const SearchBar = () => {
  const value = React.useContext(StoreContext);
  return (
    <Root>
      <Select>
        <option>Selecione aqui uma categoria</option>
        {value.categories.map((category, index) => (
          <option key={index} value={category.id}>
            {category.name}
          </option>
        ))}
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
