import styled from 'styled-components';

export const theme = {
	typography: {
		normal: `font-family: Arial, sans; letter-spacing: 0.1rem;`,
	},
	color: {
		basic: {
			black: '#0c0c0c',
			white: '#fff',
		},
		primary: {
			main: '#4f6f8c',
			light: '#b4c4d9',
			dark: '#254559',
		},
		secondary: {
			light: '#4D4D99',
			dark: '#011c26',
		},
	},
};

export const General = styled.div`
	${(props) => props.theme.typography.normal};
`;

export const Container = styled.div`
	position: relative;
	width: 100%;
	max-width: 1080px;
	padding: 0 16px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.color.basic.white};
	background-color: ${(props) =>
		props.theme.color.secondary.dark};
`;

export const Button = styled.button`
	padding: 10px 30px;
	text-transform: uppercase;
	letter-spacing: 0.3rem;
	border-radius: 10px;
	background-color: ${(props) =>
		props.theme.color.primary.dark};
	border: 1px solid
		${(props) => props.theme.color.basic.white};
	color: ${(props) => props.theme.color.basic.white};
	cursor: pointer;
	transition: all 1s ease;
	:hover {
		background-color: ${(props) =>
			props.theme.color.primary.light};
		border: 1px solid
			${(props) => props.theme.color.primary.dark};
		color: ${(props) => props.theme.color.primary.dark};
	}
`;

export const Input = styled.input`
	padding: 8px;
	width: 100%;
	box-shadow: inset -5px -5px 20px 0px rgba(0, 0, 0, 0.5);
`;
