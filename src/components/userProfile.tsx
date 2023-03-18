import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useFetchUsers from "../hooks/useFetchUsers";
import useGetUser from "../hooks/useGetUser";
import {
  NameSurname,
  UserDiv,
  UserImg,
  UsersWrapper,
  UserTitle,
} from "../styles/styled";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 300px;
  @media screen and (min-width: 1200px) {
    width: 300px;
    height: 300px;
  }
`;
const Box = styled.div`
  width: 100%;
  height: 200px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid black;
  position: relative;
  @media screen and (min-width: 1200px) {
    height: 300px;
  }
`;
const AbsoluteText = styled.p`
  position: Absolute;
  top: -12px;
  z-index: 10;
  font-size: 20px;
  background-color: white;
`;
const BoldText = styled.h2`
  font-size: 22px;
`;
const Paragraph = styled.p`
  font-size: 20px;
`;
const Main = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 15px;
`;
const Link = styled.p`
  text-decoration: underline;
  color: blue;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

interface Props {
  userLink: {
    name: string;
    link: string;
  }[];
  setUserLink: any;
}
const UserProfile = ({ userLink, setUserLink }: Props) => {
  const { id } = useParams();
  const user = useGetUser(Number(id));
  const userFriends = useFetchUsers(Number(id), true);
  const navigate = useNavigate();
  return (
    <Main>
      <Wrapper>
        <Img src={user?.imageUrl} alt="userimg" />
        <Box>
          <AbsoluteText>Info</AbsoluteText>
          <BoldText>
            {user?.prefix} {user?.name} {user?.lastName}
          </BoldText>
          <Paragraph style={{ fontStyle: "italic", marginBottom: "14px" }}>
            {user?.title}
          </Paragraph>
          <div style={{ display: "flex", gap: "5px" }}>
            <Paragraph style={{ textDecoration: "underline" }}>
              Email:{" "}
            </Paragraph>
            <Paragraph>{user?.email}</Paragraph>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Paragraph style={{ textDecoration: "underline" }}>
              Ip Address:{" "}
            </Paragraph>
            <Paragraph>{user?.ip}</Paragraph>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Paragraph style={{ textDecoration: "underline" }}>
              Job Area:{" "}
            </Paragraph>
            <Paragraph>{user?.jobArea}</Paragraph>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Paragraph style={{ textDecoration: "underline" }}>
              Job Type:{" "}
            </Paragraph>
            <Paragraph>{user?.jobType}</Paragraph>
          </div>
        </Box>
        <Box>
          <AbsoluteText>Address</AbsoluteText>
          <BoldText>
            {user?.company.name} {user?.company.suffix}
          </BoldText>
          <div style={{ display: "flex", gap: "5px" }}>
            <Paragraph style={{ textDecoration: "underline" }}>
              City:{" "}
            </Paragraph>
            <Paragraph>{user?.address.city}</Paragraph>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Paragraph style={{ textDecoration: "underline" }}>
              Country:{" "}
            </Paragraph>
            <Paragraph>{user?.address.country}</Paragraph>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Paragraph style={{ textDecoration: "underline" }}>
              State:{" "}
            </Paragraph>
            <Paragraph>{user?.address.state}</Paragraph>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Paragraph style={{ textDecoration: "underline" }}>
              Street Address:{" "}
            </Paragraph>
            <Paragraph>{user?.address.streetAddress}</Paragraph>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <Paragraph style={{ textDecoration: "underline" }}>Zip: </Paragraph>
            <Paragraph>{user?.address.zipCode}</Paragraph>
          </div>
        </Box>
      </Wrapper>
      <div
        style={{
          display: "flex",
          alignSelf: "flex-start",
          marginTop: "15px",
          marginBottom: "15px",
          flexDirection: "row",
        }}
      >
        {userLink.map((curr, id) => {
          return (
            <Link
              key={id}
              style={{ width: "100%" }}
              onClick={() => navigate(curr.link)}
            >
              {curr.name} {">"}
            </Link>
          );
        })}
      </div>
      <h1
        style={{
          alignSelf: "flex-start",
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        Friends:{" "}
      </h1>
      <UsersWrapper>
        {userFriends.map((user, id) => {
          return user ? (
            <UserDiv
              key={id}
              onClick={() => {
                navigate(`/user/${user.id}`);
                setUserLink((prevState: any) => [
                  ...prevState,
                  {
                    name: `${user?.prefix} ${user?.name} ${user?.lastName}`,
                    link: `/user/${user.id}`,
                  },
                ]);
              }}
            >
              <UserImg alt="userimg" src={user.imageUrl} />
              <NameSurname>
                {user.prefix} {user.name} {user.lastName}
              </NameSurname>
              <UserTitle>{user.title}</UserTitle>
            </UserDiv>
          ) : null;
        })}
      </UsersWrapper>
    </Main>
  );
};
export default UserProfile;
