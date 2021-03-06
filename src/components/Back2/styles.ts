import styled from "styled-components";

export const Container = styled.div`

    margin-left: 70px;

    
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: ${props => props.theme.colors.text};
        text-align: initial;
        letter-spacing: 7px;
        font-size: 0.5cm;
        margin-bottom: 8px;
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

        #mobileSpace {
            margin-left: 10px;
        }
    }
    div {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        
        h3 {
            color: ${props => props.theme.colors.text};
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            margin-top: 10px;
            text-align: initial;
            font-size: 0.37cm;
            margin-left: -5px;
        }
    }

`