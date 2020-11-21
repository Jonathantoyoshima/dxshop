import { Button, Icon } from './styles';
import Cart from 'Images/icon/cart.svg';

const CartButton = () => {
	return (
		<Button>
			<Icon src={Cart} alt='cart' />
		</Button>
	);
};

export default CartButton;
