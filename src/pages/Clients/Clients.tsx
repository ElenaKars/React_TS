// import { Link } from "react-router-dom";
import { ClientsPage, StyledLink } from "./styles";
import { Title } from "pages/Users/styles";

function Clients() {
    return (
        <ClientsPage>
            <Title>Our Clients</Title>
            <StyledLink to='apple'>Go To The Apple Page</StyledLink>
            <StyledLink to='tesla'>Go To The Tesla Page</StyledLink>
            <StyledLink to='nvidea'>Go To The Nvidea Page</StyledLink>
        </ClientsPage>
    );
}

export default Clients;