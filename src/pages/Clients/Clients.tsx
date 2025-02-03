import { Link } from "react-router-dom";
import { ClientsPage } from "./styles";
import { Title } from "pages/Users/styles";

function Clients() {
    return (
        <ClientsPage>
            <Title>Our Clients</Title>
            <Link to='apple'>Go To The Apple Page</Link>
            <Link to='tesla'>Go To The Tesla Page</Link>
            <Link to='nvidea'>Go To The Nvidea Page</Link>
        </ClientsPage>
    );
}

export default Clients;