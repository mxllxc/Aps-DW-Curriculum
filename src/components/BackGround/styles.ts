import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.secundary};
    width: 50vw;
    height: 1200;
    z-index: 0;
    margin-left: -70px;

    @media (max-width: 720px) {
        margin-left: 0px;
        width: 100vw;
    }
`