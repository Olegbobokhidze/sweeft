import { useParams } from "react-router-dom";
import styled from "styled-components";
import useGetUser from "../hooks/useGetUser";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const UserProfile = () => {
  const { id } = useParams();
  const user = useGetUser(Number(id));
  return (
    <Wrapper>
      <h1>{user?.name}</h1>
      <h1>{user?.lastName}</h1>
      <h1>{user?.email}</h1>
    </Wrapper>
  );
};
export default UserProfile;
