import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
`;

export const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  text-align: center;
  color: ${(props) => props.theme.color.primary.light};
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.color.primary.light};
  border: 0;
  border-radius: 10px;
  color: ${(props) => props.theme.color.primary.main};
  cursor: pointer;
  height: 20px;
  width: 20px;

  :hover {
    background-color: ${(props) => props.theme.color.primary.main};
    color: ${(props) => props.theme.color.primary.light};
  }
`;
