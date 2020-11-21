import { Item, Value, Text } from './styles';
import Amount from 'Components/Amount';

const CheckItem = () => {
  return (
    <Item>
      <Amount />
      <Text>coca cola </Text>
      <Value>R$ 3,50</Value>
    </Item>
  );
};

CheckItem.defaultProps = {
  theme: {
    color: {
      basic: {
        black: '#0c0c0c',
        white: '#fff',
      },
    },
  },
};

Amount.defaultProps = {
  theme: {
    color: {
      basic: {
        black: '#0c0c0c',
        white: '#fff',
      },
    },
  },
};
export default CheckItem;
