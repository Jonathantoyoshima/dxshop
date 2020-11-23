import styled from 'styled-components';

export const Root = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.color.basic.white};
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.5);
  width: 100%;
  display flex;
  padding: 12px 18px;
  margin-bottom: 6px;
`;

export const Title = styled.div`
  align-items: center;
  color: ${(props) => props.theme.color.basic.black};
  display: flex;
  font-size: 1.2rem;
  flex: 1;
`;
