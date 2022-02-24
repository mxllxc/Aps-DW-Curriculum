import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { Container, IconText } from "./styles";

export default function Side2() {
    return(
        <Container>
            <h2>SOCIAL</h2>
            <IconText>
            <AiFillGithub />
            <a target="_blank" href="https://github.com/mxllxc" rel="noreferrer">mxllxc</a>
            </IconText>
            <IconText>
                <AiFillLinkedin />
                <a target="_blank" href="https://www.linkedin.com/in/camille-ouriques-0bb99b216/" rel="noreferrer">Camille Ouriques</a>
            </IconText>
            <IconText>
            <AiOutlineInstagram />
            <a target="_blank" href="https://www.instagram.com/mxllx.c/" rel="noreferrer">mxllx.c</a>
            </IconText>
        </Container>
    );
}