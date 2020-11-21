import styled from 'styled-components';

export const Root = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    margin-bottom: 10px;
    padding: 30px;
    width: 100%;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Text = styled.div`
    white-space: nowrap;
    @media only screen and (min-width: 600px) {
        margin-right: 30px;
    }    

`;
