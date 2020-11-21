import { Root, Button, Input } from './styles';

const Amount = () => {
  return (
    <Root>
      <Button>-</Button>
      <Input value={1} onChange={() => {}} />
      <Button>+</Button>
    </Root>
  );
};

Amount.defaultProps = {
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

export default Amount;
