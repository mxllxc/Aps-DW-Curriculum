import { Container, IconText } from "./styles";
import { FiMapPin } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { AiOutlinePhone } from 'react-icons/ai';

export default function SideBar1() {
    return(
        <Container>
            <img src="https://cdn.shopify.com/s/files/1/1918/9937/products/Retro-Hearts-Quilt-Pattern-Free-Digital-Download-Free-Spirit-Fabrics_2000x.jpg?v=1636308025" alt="Profile" />
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
                <h4>(47) 99258-2247)</h4>
            </IconText>
        </Container>
    )
}