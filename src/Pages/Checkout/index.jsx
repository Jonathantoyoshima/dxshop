import React from 'react';
import { Button, Container, Wrapper } from 'Styles';
import { List, Title, Display } from './styles';
import CheckItem from 'Components/CheckItem';
import Header from 'Components/Header';
import Total from 'Components/Total';
import IconButton from 'Components/IconButton';
import ArrowLeft from 'Images/icon/arrow-left.svg';
import { StoreContext } from 'Store';

const Checkout = () => {
  const [store] = React.useContext(StoreContext);

  return (
    <Wrapper>
      <Header>
        <IconButton src={ArrowLeft} to={'/'} alt={'button-back'} />
        <Container>Logo</Container>
      </Header>
      <Container>
        <Title>Finalizar pedido</Title>
        <List>
          {store.cart.map((item) => (
            <CheckItem id={item.id} qtdade={item.qtdade} />
          ))}
        </List>
        <Total />
        <Display>
          <Button>Finalizar Compra</Button>
        </Display>
      </Container>
    </Wrapper>
  );
};

export default Checkout;
