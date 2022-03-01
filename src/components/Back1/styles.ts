import styled from "styled-components";

export const Container = styled.div`
    height: fit-content;
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

    }
`

export const BoxInformation = styled.div`

    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-template-rows: 1fr 1fr;

`

export const CircleLine = styled.div`

    display: grid;
    grid-template-columns: 1fr;

    #span1 {
        margin-left: -5px;
        width: 20px;
        height: 20px;
        background-color: ${props => props.theme.colors.details};
        border-radius: 50%;
    }

    #line1 {
        width: 3px;
        height: 130px;  
        background-color: ${props => props.theme.colors.details};
        margin-top: -15px;
        margin-left: 3px;
    }


    #span2 {
        margin-left: -5px;
        width: 20px;
        height: 20px;
        margin-top: 0px;
        background-color: ${props => props.theme.colors.details};
        border-radius: 50%;
    }

    #line2 {
        width: 3px;
        height: 100px;  
        background-color: ${props => props.theme.colors.details};
        margin-top: -40px;
        margin-left: 3px;
    }

    #span3 {
        margin-left: -5px;
        width: 20px;
        height: 20px;
        background-color: ${props => props.theme.colors.details};
        border-radius: 50%;
    }

    #line3 {
        width: 3px;
        height: 130px;  
        background-color: ${props => props.theme.colors.details};
        margin-top: -15px;
        margin-left: 3px;
    }
    
`

export const Information = styled.div`

    margin-bottom: 27px;
    margin-left: -10px;

    @media (max-width: 720px) {
        margin-left: 8px;
        margin-right: 5px;
    }

    h1 {
        color: ${props => props.theme.colors.text};
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        text-align: initial;
        font-size: 0.4cm;
        margin-left: -7px;
    }
    h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        text-align: initial;
        letter-spacing: 0px;
        font-size: 0.37cm;
        margin-bottom: 0px;
        margin-top: 0px;
        margin-left: -5px;
    }
    h3 {
        color: ${props => props.theme.colors.text};
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        margin-top: 10px;
        text-align: initial;
        font-size: 0.37cm;
        margin-left: -5px;
    }

    
`