import styled from 'styled-components';

export const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    z-index: 1;

    @media (max-width: 720px) {
        margin-left: 0px;
        width: 100vw;
    }
`