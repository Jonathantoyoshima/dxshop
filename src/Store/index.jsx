import React from 'react';

export const categories = [
  { id: 0, name: 'Bebidas' },
  { id: 1, name: 'Doces' },
  { id: 2, name: 'Salgados' },
];

export const data = [
  {
    id: 0,
    idCategory: 0,
    name: 'Coca-cola lata',
    description: 'Coca-cola lata 350ml',
    price: 3.5,
    image: '/static/image/coca-lata.png',
  },
  {
    id: 1,
    idCategory: 0,
    name: 'Fanta lata',
    description: 'Fanta lata 350ml',
    price: 3.5,
    image: '/static/image/fanta-lata.png',
  },
];

export const StoreContext = React.createContext({ data: data, categories: categories });

export const Store = ({ children }) => {
  return <StoreContext.Provider value={{ data: data, categories: categories }}>{children}</StoreContext.Provider>;
};
