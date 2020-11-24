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
  { id: 4, idCategory: 1, name: 'Bolacha Negresco', price: 2.0 },
  { id: 5, idCategory: 2, name: 'Doritos Pequeno 350g', price: 4.0 },
  { id: 6, idCategory: 1, name: 'Zezé Pacote Pequeno 350g', price: 3.0 },
  { id: 7, idCategory: 0, name: 'Pepsi lata 350ml', price: 3.0 },
  { id: 7, idCategory: 0, name: 'Dolly lata 350ml', price: 2.0 },
];

const cart = [];

const info = { data: data, categories: categories, cart: cart, chooseCategory: -1 };

export const StoreContext = React.createContext(info);

export const Store = ({ children }) => {
  const [context, setContext] = React.useState(info);

  return <StoreContext.Provider value={[context, setContext]}>{children}</StoreContext.Provider>;
};
