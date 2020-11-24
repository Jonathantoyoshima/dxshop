import styled from 'styled-components';

export const List = styled.div``;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 16px 0;
`;

export const Pages = styled.div`
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
