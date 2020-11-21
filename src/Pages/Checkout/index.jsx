import { Container, Wrapper } from 'Styles';
import { List, Title } from './styles';
import Card from 'Components/Card';
import Header from "Components/Header";

const Checkout = () => {
	return (
		<Wrapper>
			<Header />
			<Container>
				<Title>Finalizar pedido</Title>
				<List>
					<Card
						title={'Dom Casmurro'}
						link={'/dom-casmurro'}
					/>
					<Card title={'Moreninha'} link={'/moreninha'} />
					<Card
						title={'Primo Basílio'}
						link={'/primo-basilio'}
					/>
					<Card title={'Lusíadas'} link={'/lusiadas'} />
				</List>
			</Container>
		</Wrapper>
	);
};

export default Checkout;
