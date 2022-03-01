import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin-top: 0;
        margin-left: 4%;
        padding: 0;
        box-sizing: border-box;
    }

    body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    margin: 0;    
    padding: 0;    
    font-family: sans-serif;    
    transition: all 0.25s linear;
    }
    
    a {
        color: ${props => props.theme.colors.text};
    }

    #grid {
        display: flex;
        justify-content: center;
        margin-left: 95px;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
        #grid {
        display: grid;
        grid-template-columns: 1fr;
        margin-left: 34%;
    }
    }

    body {
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        display: flex;
        justify-content: initial;
    }

    body, input, textarea, select, button {
        font: 400 1rem "Roboto", sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`;