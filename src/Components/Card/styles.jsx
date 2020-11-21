import styled from 'styled-components';

export const Root = styled.div`
    align-items: center;
    background-color: ${(props) =>
		props.theme.color.basic.white};
	box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.5);
	box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 250px;
    width: 100%;
`;

export const Title = styled.div`
	align-items: center;
	box-sizing: border-box;
	color: ${(props) => props.theme.color.basic.black};
	display: flex;
	font-size: 1.5rem;
	flex: 1;
	padding: 20px;
`;
