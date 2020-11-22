import React from 'react';

const categories = [
  { id: 0, name: 'Bebidas' },
  { id: 1, name: 'Doces' },
  { id: 2, name: 'Salgados' },
];

const data = [
  { id: 0, idCategory: 0, name: 'Coca-cola lata 350ml', price: 3.5 },
  { id: 1, idCategory: 0, name: 'Fanta lata 350ml', price: 3.5 },
  { id: 2, idCategory: 1, name: 'Bolinho Ana maria', price: 1.5 },
  { id: 3, idCategory: 2, name: 'Ruffes Pequeno 350g', price: 5.0 },
];

const cart = [];

const info = { data: data, categories: categories, cart: cart, chooseCategory: -1 };

export const StoreContext = React.createContext(info);

export const Store = ({ children }) => {
  const [context, setContext] = React.useState(info);

  return <StoreContext.Provider value={[context, setContext]}>{children}</StoreContext.Provider>;
};
