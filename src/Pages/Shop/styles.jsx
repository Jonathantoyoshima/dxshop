import styled from 'styled-components';

export const List = styled.div`
	box-sizing: border-box;
	border: 1px solid
		${(props) => props.theme.color.basic.white};
	margin: auto;
	padding: 20px;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
`;

export const Title = styled.h1`
    font-size: 20px;
    text-transform: uppercase;
`;
