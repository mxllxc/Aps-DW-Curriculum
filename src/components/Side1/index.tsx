import { Container, IconText } from "./styles";
import { FiMapPin } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { AiOutlinePhone } from 'react-icons/ai';

export default function SideBar1() {
    return(
        <Container>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHs_LLRR-qbGg/profile-displayphoto-shrink_200_200/0/1638398936646?e=1651104000&v=beta&t=LgCJm3abIFiVX6ok7-P7q8tpwq8gEyEBo5uC7aWlRpo" alt="Profile" />
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