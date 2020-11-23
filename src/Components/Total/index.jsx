import React from 'react';
import { Root, Value, Text } from './styles';
import { StoreContext } from 'Store';

const Total = () => {
  const [store] = React.useContext(StoreContext);
  const value = store.cart.reduce((total, item) => {
    const data = store.data.find((el) => el.id === item.id);
    return item.qtdade * data.price + total;
  }, 0);

  return (
    <Root>
      <Text>Total: </Text>
      <Value>{`R$ ${value.toFixed(2)}`}</Value>
    </Root>
  );
};

const defaultProps = {
  theme: {
    color: {
      basic: {
        black: '#0c0c0c',
        white: '#fff',
      },
      primary: {
        light: '#000',
        main: '#ccc',
        dark: '#000',
      },
    },
  },
};
Text.defaultProps = defaultProps;
Value.defaultProps = defaultProps;
Root.defaultProps = defaultProps;

export default Total;
