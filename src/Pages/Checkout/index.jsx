import { Button, Container, Wrapper } from 'Styles';
import { List, Title, Display } from './styles';
import CheckItem from 'Components/CheckItem';
import Header from 'Components/Header';
import Total from 'Components/Total';

const Checkout = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Title>Finalizar pedido</Title>
        <List>
          <CheckItem />
          <CheckItem />
          <CheckItem />
          <CheckItem />
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
