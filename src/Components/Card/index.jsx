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

Card.defaultProps = {
	theme: {
		color: {
			basic: {
				black: '#0c0c0c',
				white: '#fff',
			},
		},
	},
};

export default Card;
