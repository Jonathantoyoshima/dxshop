import React from 'react';
import { Item, Value, Text } from './styles';
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

const CheckItem = ({ id, qtdade, index }) => {
  const [store, setStore] = React.useContext(StoreContext);
  const data = store.data.find((item) => item.id === id);

  const handleAmount = (amount) => {
    let cart = store.cart;
    switch (amount) {
      case 'increase':
        cart[index] = { id: id, qtdade: qtdade + 1 };
        setStore({ ...store, cart: cart });
        break;
      case 'decrease':
        if (qtdade - 1 > 0) {
          cart[index] = { id: id, qtdade: qtdade - 1 };
        } else {
          cart.splice(index, 1);
        }
        setStore({ ...store, cart: cart });
        break;
      case typeof amount === 'number':
        console.log(amount);
        if (amount > 0) {
          cart[index] = { id: id, qtdade: amount };
        } else {
          cart.splice(index, 1);
        }
        setStore({ ...store, cart: cart });
        break;
      default:
        //value = 1;
        break;
    }
  };

  return (
    <Item>
      <Amount value={qtdade} change={(amount) => handleAmount(amount)} />
      <Text>{data.name}</Text>
      <Value>{`R$ ${data.price}`}</Value>
    </Item>
  );
};

Item.defaultProps = defaultProps;
Text.defaultProps = defaultProps;
Value.defaultProps = defaultProps;

export default CheckItem;
