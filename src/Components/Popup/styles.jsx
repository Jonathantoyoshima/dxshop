import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';

export const Fade = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.open ? 'flex' : 'none')};
`;

export const Box = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.color.basic.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
  max-width: 600px;
  padding: 10px;
`;

export const Text = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  max-width: 350px;
  margin-bottom: 20px;
`;

export const Check = styled(AiFillCheckCircle)`
  width: 60px;
  height: 60px;
  margin: 20px;
`;
