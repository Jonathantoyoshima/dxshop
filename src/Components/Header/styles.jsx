import styled from 'styled-components';

export const Root = styled.div`
	width: 100%;
	padding: 8px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	color: ${(props) => props.theme.color.primary.dark};
	background-color: ${(props) =>
		props.theme.color.primary.light};
`;
