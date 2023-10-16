import styled from "styled-components";

export const Container = styled.div`
    margin-left: 70px;
    margin-top: 40px;
    margin-bottom: 40px;

    >div {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: ${props => props.theme.colors.text};
        text-align: initial;
        letter-spacing: 7px;
        font-size: 0.5cm;
        margin-bottom: 20px;
        margin-top: 20px;
        font-weight: bold;
        margin-left: 15px;
    }
    
    @media (max-width: 720px) {
        margin-left: 0px;
        width: 100vw;

        h2 {
            text-align: center;
        }
    }

`

export const Inform = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    h3 {
        color: ${props => props.theme.colors.text};
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            margin-top: 10px;
            text-align: initial;
            font-size: 0.37cm;
            margin-left: 0px;
        }
        h4 {
            color: ${props => props.theme.colors.text};
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            margin-top: -10px;
            text-align: initial;
            font-size: 0.37cm;
            margin-left: 0px;
        }
`