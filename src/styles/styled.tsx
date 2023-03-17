import styled from "styled-components";

export const UsersWrapper = styled.div`
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
export const UserDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid grey;
  cursor: pointer;
  @media screen and (min-width: 1200px) {
    max-width: 300px;
  }
`;
export const UserImg = styled.img`
  width: 100%;
`;
export const NameSurname = styled.h1`
  font-size: 20px;
  margin-left: 10px;
`;
export const UserTitle = styled.p`
  font-size: 15px;
  margin-left: 10px;
`;
