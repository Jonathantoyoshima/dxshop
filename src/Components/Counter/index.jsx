import React from 'react';
import { Root } from './styles';
import { StoreContext } from 'Store';
const defaultProps = {
  theme: {
    color: {
      secondary: { light: '#0ff' },
      basic: { white: '#fff' },
    },
  },
};

const Counter = () => {
  const [store] = React.useContext(StoreContext);
  return <Root hidden={store.cart.length > 0}>{store.cart.length}</Root>;
};

Root.defaultProps = defaultProps;

export default Counter;
