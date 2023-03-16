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
const FetchUsers = () => {
  const userList = useFetchUsers();
  return (
    <Wrapper>
      {userList.map((user) => {
        return (
          <UserDiv key={user.id}>
            <Img alt="userimg" src={user.imageUrl} />
            <h1>{user.name}</h1>
            <p>{user.title}</p>
          </UserDiv>
        );
      })}
    </Wrapper>
  );
};

export default FetchUsers;
