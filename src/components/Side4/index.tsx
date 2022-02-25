import { BoxInformation, CircleLine, Container, Information } from "./styles";

export default function Side4() {
    return(
        <Container>
            <h2>FORMAÇÃO</h2>
            <BoxInformation>
                <CircleLine>
                    <div id="span1" />
                    <div id="line1" />
                </CircleLine>
                    <Information>
                        <h1>Tecnico em Informatica</h1>
                        <h2>IFC - Brusque</h2>
                        <h3>2018 - 2020</h3>
                    </Information>
                    <CircleLine>
                    <div id="span2" />
                    <div id="line2" />
                </CircleLine>
                <Information>
                        <h1 id="margDown">Sistemas da Informação</h1>
                        <h2>Unifebe</h2>
                        <h3>2022 - atual</h3>
                </Information>
            </BoxInformation>
        </Container>
    )
}