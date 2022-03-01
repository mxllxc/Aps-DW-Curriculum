import { BoxInformation, CircleLine, Container, Information } from "./styles";

export default function Back1() {
    return(
        <Container>
            <h2>EXPERIÊNCIA</h2>
            <BoxInformation>
            <CircleLine>
                    <div id="span3" />
                    <div id="line3" />
                </CircleLine>
                    <Information>
                        <h1>Monitoria de Inglês</h1>
                        <h2>For You Idiomas</h2>
                        <h3>Ministro aulas, privadas ou em turmas, de diversos níveis e faixas etárias.</h3>
                    </Information>
                <CircleLine>
                    <div id="span1" />
                    <div id="line1" />
                </CircleLine>
                    <Information>
                        <h1>Marketing</h1>
                        <h2>Livny</h2>
                        <h3>Atuação no marketing, ecommercy e gerência de anúncios de loja de roupas feminina.</h3>
                    </Information>
                    <CircleLine>
                    <div id="span2" />
                </CircleLine>
                <Information>
                        <h1>Programadora</h1>
                        <h2>Havan Labs</h2>
                        <h3>Desenvolvimento com foco em frontend, utilizando a metodologia ágil SCRUM.</h3>
                </Information>
            </BoxInformation>
        </Container>
    )
}