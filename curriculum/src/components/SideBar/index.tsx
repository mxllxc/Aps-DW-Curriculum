import Side1 from "../Side1";
import Side2 from "../Side2";
import Side3 from "../Side3";
import Side4 from "../Side4";
import { Container } from "./styles";

export default function SideBar() {
    return(
        <Container>
            <Side1 />
            <Side2 />
            <Side3 />
            <Side4 />
        </Container>
    )
}