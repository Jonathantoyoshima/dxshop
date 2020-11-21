import styled from 'styled-components';

export const Root = styled.div`
  background-color: ${(props) => props.theme.color.primary.light};
  display: flex;
  color: ${(props) => props.theme.color.primary.dark};
  font-weight: bold;
  font-size: 1.2rem;
  padding: 16px;
`;

export const Text = styled.div`
  flex: 1;
`;

export const Value = styled.div``;
