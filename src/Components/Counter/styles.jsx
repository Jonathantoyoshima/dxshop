import styled from 'styled-components';

export const Root = styled.div`
  position: absolute;
  top: -2px;
  right: -5px;
  background-color: ${(props) => props.theme.color.secondary.light};
  color: ${(props) => props.theme.color.basic.white};
  font-size: 0.8rem;
  border-radius: 30px;
  min-width: 18px;
  height: 18px;
  display: ${(props) => (props.hidden ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
