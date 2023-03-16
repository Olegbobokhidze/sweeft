import React from "react";
import styled from "styled-components";
import useFetchUsers from "../hooks/useFetchUsers";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  row-gap: 10px;
  @media screen and (min-width: 1200px) {
    grid-template-columns: auto auto auto auto;
    align-items: center;
    justify-content: center;
  }
`;
const UserDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid grey;
  @media screen and (min-width: 1200px) {
    max-width: 300px;
  }
`;
const Img = styled.img`
  width: 100%;
`;
const NameSurname = styled.h1`
  font-size: 20px;
  margin-left: 10px;
`;
const UserTitle = styled.p`
  font-size: 15px;
  margin-left: 10px;
`;
const Users = () => {
  const userList = useFetchUsers();
  return (
    <Wrapper>
      {userList.map((user, id) => {
        return user ? (
          <UserDiv key={id}>
            <Img alt="userimg" src={user.imageUrl} />
            <NameSurname>
              {user.prefix} {user.name} {user.lastName}
            </NameSurname>
            <UserTitle>{user.title}</UserTitle>
          </UserDiv>
        ) : null;
      })}
    </Wrapper>
  );
};

export default Users;
