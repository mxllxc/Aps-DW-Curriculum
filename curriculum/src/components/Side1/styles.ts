import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--purple);
    width: 230px;
    height: 45vh;
    margin-left: -4%;
    margin-top: -98vh;
    display: grid;
    grid-template-columns: 1fr;

    img {
        height: 100px;
        justify-self: center;
        border-radius: 50px;
        margin-top: 30px;
    }
    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        text-align: center;
        font-size: large;
        font-weight: bold;
        margin-top: 10px;
    }
    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        text-align: center;
        font-size: 0.4cm;
        margin-top: -5px;
    }
`

export const IconText = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    h4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.4cm;
        margin-top: auto;
        margin-bottom: auto;
    }
`
