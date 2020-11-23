import { Root, Button, Input } from './styles';

const Amount = ({ value, change }) => {
  return (
    <Root>
      <Button onClick={(e) => change('decrease')}>-</Button>
      <Input value={value} onChange={(e) => change(e.currentTarget.value)} />
      <Button onClick={(e) => change('increase')}>+</Button>
    </Root>
  );
};
const props = {
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
Input.defaultProps = props;
Button.defaultProps = props;

export default Amount;
