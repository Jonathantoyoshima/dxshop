import React from 'react';
import { Button, Container, Wrapper } from 'Styles';
import { List, Pages, Title } from './styles';
import Card from 'Components/Card';
import Header from 'Components/Header';
import SearchBar from 'Components/SearchBar';
import CartButton from 'Components/CartButton';
import Cart from 'Images/icon/cart.svg';
import { StoreContext } from 'Store';

const Shop = () => {
  const [store] = React.useContext(StoreContext);
  const [page, setPage] = React.useState(0);
  let ShowData = store.data
    .filter((item) => !store.cart.some((el) => el.id === item.id))
    .filter((item) =>
      Number(store.chooseCategory) >= 0 ? Number(item.idCategory) === Number(store.chooseCategory) : true
    );
  let numberOfPages = Math.ceil(ShowData.length / 3);
  let initial = page * 3;
  let end = page * 3 + 3;

  return (
    <Wrapper>
      <Header>
        <Container>Logo</Container>
        <CartButton src={Cart} to={'/checkout'} alt='cart' />
      </Header>
      <Container>
        <SearchBar onChange={() => setPage(0)} />
        <Title>Lista de Produtos:</Title>
        <List>
          {ShowData.slice(initial, end).map((item, index) => (
            <Card key={index} title={item.name} id={item.id} />
          ))}
        </List>
        <Pages hide={numberOfPages === 0}>
          <Button disabled={page <= 0} onClick={() => setPage(page - 1)}>
            {'<<<'}
          </Button>
          {`Página ${page + 1}/${numberOfPages}`}
          <Button disabled={page + 1 >= numberOfPages} onClick={() => setPage(page + 1)}>
            {'>>>'}
          </Button>
        </Pages>
      </Container>
    </Wrapper>
  );
};

export default Shop;
