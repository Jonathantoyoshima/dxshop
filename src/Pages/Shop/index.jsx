import React from 'react';
import { Container, Wrapper } from 'Styles';
import { List, Title } from './styles';
import Card from 'Components/Card';
import Header from 'Components/Header';
import SearchBar from 'Components/SearchBar';
import { StoreContext } from 'Store';

const Library = () => {
  const value = React.useContext(StoreContext);

  return (
    <Wrapper>
      <Header />
      <Container>
        <SearchBar />
        <Title>Lista de Produtos:</Title>
        <List>
          {value.data.map((item, index) => (
            <Card key={index} title={item.name} link={'/dom-casmurro'} />
          ))}
        </List>
      </Container>
    </Wrapper>
  );
};

export default Library;
