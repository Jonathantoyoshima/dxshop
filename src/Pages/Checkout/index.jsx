import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Wrapper } from 'Styles';
import { Display, List, Title } from './styles';
import CheckItem from 'Components/CheckItem';
import Header from 'Components/Header';
import Total from 'Components/Total';
import IconButton from 'Components/IconButton';
import Popup from 'Components/Popup';
import ArrowLeft from 'Images/icon/arrow-left.svg';
import { StoreContext } from 'Store';

const Checkout = () => {
  const [store, setStore] = React.useContext(StoreContext);
  const [open, setOpen] = React.useState(false);
  let history = useHistory();

  return (
    <>
      <Popup
        text='Seu pedido foi realizado com sucesso!'
        button='fechar'
        open={open}
        onClick={() => {
          setOpen(false);
          setStore({ ...store, cart: [] });
          history.push('/');
        }}
      />
      <Wrapper>
        <Header>
          <IconButton src={ArrowLeft} to={'/'} alt={'button-back'} />
          <Container>Logo</Container>
        </Header>
        <Container>
          <Title>Finalizar pedido</Title>
          <List>
            {store.cart.map((item, index) => (
              <CheckItem key={index} index={index} id={item.id} qtdade={item.qtdade} />
            ))}
          </List>
          <Total />
          <Display>
            <Button onClick={() => setOpen(true)}>Finalizar Compra</Button>
          </Display>
        </Container>
      </Wrapper>
    </>
  );
};

export default Checkout;
