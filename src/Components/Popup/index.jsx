import { Box, Fade, Text, Check } from './styles';
import { Button } from 'Styles';

const Popup = ({ text, button, open, onClick }) => {
  return (
    <Fade open={open} onClick={onClick}>
      <Box>
        <Check />
        <Text>{text}</Text>
        <Button onClick={onClick}>{button}</Button>
      </Box>
    </Fade>
  );
};

export default Popup;
