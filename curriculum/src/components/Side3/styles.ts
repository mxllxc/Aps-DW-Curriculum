import styled from "styled-components"

export const Container = styled.div`

    background-color: var(--side);
    width: 260px;
    height: 195px;
    margin-left: -4%;
    margin-top: 5px;
    padding-bottom: 8px;
    display: grid;
    grid-template-columns: 1fr;

   h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        text-align: initial;
        letter-spacing: 7px;
        font-size: 0.5cm;
        margin-bottom: 8px;
        margin-top: 20px;
        font-weight: bold;
        margin-left: 15px;
    }

    h4 {
        margin-left: 12px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 0.4cm;
        margin-top: 7px;
        margin-bottom: 13px;
    }
`