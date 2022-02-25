import styled from "styled-components"

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
        letter-spacing: 5px;
        font-size: 0.5cm;
        margin-bottom: 8px;
        margin-top: 20px;
        font-weight: bold;
        margin-left: 15px;
    }

`

export const BoxInformation = styled.div`

    margin-top: -30px;
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
        background: var(--details);
        border-radius: 50%;
    }

    #line1 {
        width: 3px;
        height: 90px;  
        background: var(--details);
        margin-top: -30px;
        margin-left: 3px;
    }


    #span2 {
        margin-left: -5px;
        width: 20px;
        height: 20px;
        margin-top: -19px;
        background: var(--details);
        border-radius: 50%;
    }

    #line2 {
        width: 3px;
        height: 80px;  
        background: var(--details);
        margin-top: -30px;
        margin-left: 3px;
    }
    
`

export const Information = styled.div`
    h1 {
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
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        margin-top: 10px;
        text-align: initial;
        font-size: 0.37cm;
        margin-left: -5px;
    }

    #margDown {
        margin-top: -20px;
    }
`
