import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  width: 24px;
  background-color: transparent;
  border: 0;
  position: absolute;
  cursor: pointer;
  right: 16px;
`;

export const Icon = styled.img`
  width: 100%;
`;
