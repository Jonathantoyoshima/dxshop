import { Button, Icon } from './styles';
import Counter from 'Components/Counter';

const CartButton = ({ position, src, to, alt }) => {
  return (
    <Button to={to} position={position}>
      <Icon src={src} alt={alt} />
      <Counter />
    </Button>
  );
};

export default CartButton;
