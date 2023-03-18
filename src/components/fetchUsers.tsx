import React from "react";
import { useNavigate } from "react-router-dom";
import useFetchUsers from "../hooks/useFetchUsers";
import {
  NameSurname,
  UserDiv,
  UserImg,
  UsersWrapper,
  UserTitle,
} from "../styles/styled";

const Users = () => {
  const userList = useFetchUsers();
  const navigate = useNavigate();

  return (
    <UsersWrapper>
      {userList.users.map((user, id) => {
        return user ? (
          <UserDiv key={id} onClick={() => navigate(`/user/${user.id}`)}>
            <UserImg alt="userimg" src={user.imageUrl} />
            <NameSurname>
              {user.prefix} {user.name} {user.lastName}
            </NameSurname>
            <UserTitle>{user.title}</UserTitle>
          </UserDiv>
        ) : null;
      })}
    </UsersWrapper>
  );
};

export default Users;
