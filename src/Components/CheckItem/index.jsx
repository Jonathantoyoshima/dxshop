import React from 'react';
import { Item, Value, Text } from './styles';
import handleAmount from './handleAmount';
import Amount from 'Components/Amount';
import { StoreContext } from 'Store';

const defaultProps = {
  theme: {
    color: {
      basic: {
        black: '#0c0c0c',
        white: '#fff',
      },
    },
  },
};

const CheckItem = (props) => {
  const { id, qtdade } = props;
  const [store, setStore] = React.useContext(StoreContext);
  const data = store.data.find((item) => item.id === id);

  return (
    <Item>
      <Amount
        value={qtdade}
        change={(amount) => setStore({ ...store, cart: handleAmount(props, amount, store.cart) })}
      />
      <Text>{data.name}</Text>
      <Value>{`R$ ${data.price.toFixed(2)}`}</Value>
    </Item>
  );
};

Item.defaultProps = defaultProps;
Text.defaultProps = defaultProps;
Value.defaultProps = defaultProps;

export default CheckItem;
