import { Button, Container, Wrapper } from 'Styles';
import { List, Title, Display } from './styles';
import CheckItem from 'Components/CheckItem';
import Header from 'Components/Header';
import Total from 'Components/Total';
import IconButton from 'Components/IconButton';
import ArrowLeft from 'Images/icon/arrow-left.svg';

const Checkout = () => {
  return (
    <Wrapper>
      <Header>
        <IconButton src={ArrowLeft} to={'/'} position={"left"} alt={"button-back"} />
        <Container>Logo</Container>
      </Header>
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
