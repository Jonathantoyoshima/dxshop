import { Root, Value, Text } from './styles';

const Total = () => {
  return (
    <Root>
      <Text>Total: </Text>
      <Value>R$ 3,50</Value>
    </Root>
  );
};

Total.defaultProps = {
  theme: {
    color: {
      basic: {
        black: '#0c0c0c',
        white: '#fff',
      },
      primary: {
        light: '#000',
        main: '#ccc',
        dark: '#000',
      },
    },
  },
};

export default Total;
