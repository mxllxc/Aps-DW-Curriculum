/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Container, IconText } from "./styles";
import { FiMapPin, FiMoon } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { AiOutlinePhone } from 'react-icons/ai';
// import { useContext } from "react";
// import { ThemeContext } from "styled-components";

interface Props {
    toggleTheme(): void;
}

export default function SideBar1({toggleTheme}:Props) {

    // const { title } = useContext(ThemeContext)

    return(
        <Container>
            <button id="butTheme" onClick={() => {toggleTheme()}}>
            <FiMoon  id="moon" />
            </button>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHs_LLRR-qbGg/profile-displayphoto-shrink_800_800/0/1638398936646?e=1657152000&v=beta&t=l9qsR5tqu4cUGVI6PMrmomoTkXmlhvwL6hfNoBd-MOc" alt="Profile" />
            <h1>CAMILLE OURIQUES</h1>
            <h2>Desenvolvedora</h2>
            <IconText>
            <FiMapPin />
                <h4>Brusque, SC</h4>
            </IconText>
            <IconText>
                <GoMail />
                <h4>mille.ouriques@gmail.com</h4>
            </IconText>
            <IconText>
            <AiOutlinePhone />
                <h4>(47) 99258-2247</h4>
            </IconText>
        </Container>
    )
}