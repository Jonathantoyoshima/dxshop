import React from 'react';
import { Select } from 'Styles';
import { Root } from './styles';
import { StoreContext } from 'Store';

const SearchBar = () => {
  const [store, setStore] = React.useContext(StoreContext);
  const handleFilter = (e) => {
    setStore({ ...store, chooseCategory: e.currentTarget.value });
  };

  return (
    <Root>
      <Select value={store.chooseCategory} onChange={handleFilter}>
        <option value={-1}>Selecione aqui uma categoria</option>
        {store.categories.map((category, index) => (
          <option key={index} value={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
    </Root>
  );
};

export default SearchBar;
