import styled from "styled-components";

export const Container = styled.div`

    background-color: var(--side);
    width: 260px;
    height: 300px;
    margin-left: -4%;
    padding-bottom: 8px;
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 5px;

     h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        text-align: initial;
        letter-spacing: 7px;
        font-size: 0.5cm;
        margin-bottom: -50px;
        margin-top: 20px;
        font-weight: bold;
        margin-left: 12px;
    }
    h3 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        text-align: initial;
        justify-self: baseline;
        letter-spacing: 0px;
        font-size: 0.37cm;
        margin-bottom: 5px;
        margin-top: 0px;
    }

    div {
        margin-left: 8px;
        width: 95%;
        margin-right: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

`