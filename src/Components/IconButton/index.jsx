import { Button, Icon } from './styles';

const CartButton = ({position, src, to, alt}) => {

  return (
    <Button to={to} position={position}>
      <Icon src={src} alt={alt}/>
    </Button>
  );
};

export default CartButton;
