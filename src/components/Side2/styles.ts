import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--side);
    width: 260px;
    height: 165px;
    margin-left: -4%;
    padding-bottom: 8px;
    margin-top: 5px;
    display: grid;
    grid-template-columns: 1fr;

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        text-align: initial;
        letter-spacing: 7px;
        font-size: 0.5cm;
        margin-bottom: 8px;
        margin-top: 20px;
        font-weight: bold;
        margin-left: 15px;
    }
`;

export const IconText = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
    margin-left: 3px;

    a {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 0.4cm;
        margin-top: auto;
        margin-bottom: auto;
        color: #e9e9e9;
        letter-spacing: 0.5px;
    }
    a:hover {
        transition: 0.4s;
        color: #ffffff;
    }

`