import { Root } from './styles';
import { Container } from 'Styles';
import CartButton from 'Components/CartButton';

const Header = () => {
	return (
		<Root>
			<Container>Logo</Container>
			<CartButton />
		</Root>
	);
};

export default Header;
