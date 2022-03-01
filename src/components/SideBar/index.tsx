import Side1 from "../Side1";
import Side2 from "../Side2";
import Side4 from "../Side4";
import Side5 from "../Side5";
import { Container } from "./styles";

interface Props {
    toggleTheme(): void;
}

export default function SideBar( {toggleTheme}: Props ) {
    return(
        <Container>
            <Side1 toggleTheme={toggleTheme}/>
            <Side2 />
            <Side4 />
            <Side5 />
        </Container>
    )
}