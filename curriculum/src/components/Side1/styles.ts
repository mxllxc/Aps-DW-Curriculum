import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--side);
    width: 230px;
    height: 363px;
    margin-left: -4%;
    padding-bottom: 8px;
    margin-top: 5px;
    display: grid;
    grid-template-columns: 1fr;

    img {
        height: 100px;
        justify-self: center;
        border-radius: 50px;
        margin-top: 30px;
        margin-left: initial;
    }
    h1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        text-align: center;
        font-size: large;
        font-weight: bold;
        letter-spacing: 4px;
        margin-left: initial;
        margin-top: 10px;
    }
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        letter-spacing: 1px;
        text-align: center;
        margin-left: initial;
        font-size: 0.4cm;
        margin-top: -13px;
    }
`

export const IconText = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
    margin-left: 3px;

    h4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.4cm;
        margin-top: auto;
        margin-bottom: auto;
    }
`

