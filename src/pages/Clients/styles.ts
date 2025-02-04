import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
  padding: 20px;
  font-size: 30px;
`;

export const StyledLink = styled(Link)`
  font-size: 36px;
  font-weight: bold;
  text-decoration: none;
`;
