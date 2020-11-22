import { Item, Value, Text } from './styles';
import Amount from 'Components/Amount';

const CheckItem = () => {
  return (
    <Item>
      <Amount />
      <Text>coca cola</Text>
      <Value>R$ 3,50</Value>
    </Item>
  );
};

const defaultProps = {
  theme: {
    color: {
      basic: {
        black: '#0c0c0c',
        white: '#fff',
      },
    },
  },
};

Item.defaultProps = defaultProps;
Text.defaultProps = defaultProps;
Value.defaultProps = defaultProps;

export default CheckItem;
