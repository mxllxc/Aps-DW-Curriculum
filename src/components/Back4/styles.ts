import styled from "styled-components";

export const Container = styled.div`

    margin-left: 70px;
    margin-top: 40px;

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: black;
        text-align: initial;
        letter-spacing: 7px;
        font-size: 0.5cm;
        margin-bottom: 20px;
        margin-top: 20px;
        font-weight: bold;
        margin-left: 15px;
    }

    div {
        /* margin-left: 50px; */
        margin-top: 20px;
        /* display: flex;
        flex-direction: column;
        align-self: center; */

        #icon {
            margin-left: 20px;
        }

        h3 {
            color: black;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            margin-top: 10px;
            text-align: initial;
            font-size: 0.37cm;
            margin-left: 0px;
        }
    }

`

export const Grid = styled.div`

    display: grid;
    margin-left: 40px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;

`
