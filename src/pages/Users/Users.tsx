import Button from "components/Button/Button";
import { Title, UsersPage } from "./styles";
import { Link, useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();
  const goToAboutPage = () => {
    navigate('/about');
  };
  return (
    <UsersPage>
      <Title>Select user</Title>
      <Link to='user'>Go to User Page</Link>
      <Button name="Go to About Page" onClick={goToAboutPage} />
    </UsersPage>
  );
}

export default Users;