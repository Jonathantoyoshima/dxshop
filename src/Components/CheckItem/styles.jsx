import styled from 'styled-components';
import { theme } from 'Styles/index';

export const Item = styled.div`
  display: flex;
  padding: 8px;
  :not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.color.basic.white};
  }
`;

export const Text = styled.div`
  flex: 1;
  padding: 0 8px;
`;
export const Value = styled.div``;
