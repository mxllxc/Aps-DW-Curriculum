import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
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
            <IconText>
                <BsSpotify />
                <a target="_blank" href="https://open.spotify.com/user/mnits569heo9f234gry0xd1d2?si=77c4e37348af4f6a" rel="noreferrer">Camille</a>
            </IconText>
        </Container>
    );
}