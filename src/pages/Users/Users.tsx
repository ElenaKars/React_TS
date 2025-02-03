import Button from "components/Button/Button";
import { Title, UsersPage } from "./styles";
import { Link } from "react-router-dom";
function Users() {

  return (
    <UsersPage>
      <Title>Select user</Title>
      <Link to='user'>Go to User Page</Link>
      <Button name="Go to About Page" onClick={() => { }} />
    </UsersPage>
  );
}

export default Users;