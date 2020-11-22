import React from 'react';
import { Container, Wrapper } from 'Styles';
import { List, Title } from './styles';
import Card from 'Components/Card';
import Header from 'Components/Header';
import SearchBar from 'Components/SearchBar';
import IconButton from 'Components/IconButton';
import Cart from 'Images/icon/cart.svg';
import { StoreContext } from 'Store';

const Shop = () => {
  const [store] = React.useContext(StoreContext);

  return (
    <Wrapper>
      <Header>
        <Container>Logo</Container>
        <IconButton src={Cart} to={'/checkout'} alt='cart' />
      </Header>
      <Container>
        <SearchBar />
        <Title>Lista de Produtos:</Title>
        <List>
          {store.data
            .filter((item) =>
              Number(store.chooseCategory) >= 0 ? Number(item.idCategory) === Number(store.chooseCategory) : true
            )
            .map((item, index) => (
              <Card key={index} title={item.name} link={'/dom-casmurro'} />
            ))}
        </List>
      </Container>
    </Wrapper>
  );
};

export default Shop;
