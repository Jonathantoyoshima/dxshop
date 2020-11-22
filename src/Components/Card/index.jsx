import { Root, Title } from './styles';
import { Button } from 'Styles';

const Card = ({ title, link }) => {
  return (
    <Root>
      <Title>{title}</Title>
      <Button>Adicionar ao carrinho</Button>
    </Root>
  );
};

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

Card.defaultProps = defaultProps;
Root.defaultProps = defaultProps;
Title.defaultProps = defaultProps;
Button.defaultProps = defaultProps;

export default Card;
