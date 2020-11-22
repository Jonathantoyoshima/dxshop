import React from 'react';
import { Root, Title } from './styles';
import { Button } from 'Styles';
import { StoreContext } from 'Store';

const defaultProps = {
  theme: {
    color: {
      basic: {
        black: '#0c0c0c',
        white: '#fff',
      },
      primary: {
        dark: '#000',
      },
    },
  },
};

const Card = ({ title, id }) => {
  const [store, setStore] = React.useContext(StoreContext);
  const [hidden, setHidden] = React.useState(store.cart.map((e) => e.id).indexOf(id) < 0);
  const handleCart = (id) => {
    const prevStore = store.cart;
    if (prevStore.map((e) => e.id).indexOf(id) < 0) {
      prevStore.push({ id: id, qtdade: 1 });
    }
    setHidden(prevStore.map((e) => e.id).indexOf(id) < 0);
    setStore({ ...store, cart: prevStore });
  };

  return (
    <Root hidden={hidden}>
      <Title>{title}</Title>
      <Button onClick={() => handleCart(id)}>Adicionar ao carrinho</Button>
    </Root>
  );
};

Card.defaultProps = defaultProps;
Root.defaultProps = defaultProps;
Title.defaultProps = defaultProps;
Button.defaultProps = defaultProps;

export default Card;
