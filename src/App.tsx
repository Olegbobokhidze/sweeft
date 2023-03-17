import React, { Fragment, useState } from "react";
import { createGlobalStyle } from "styled-components";
import Users from "./components/fetchUsers";
import { Route, Routes, useLocation } from "react-router-dom";
import UserProfile from "./components/userProfile";

interface UserLink {
  name: string;
  link: string;
}
function App() {
  const [userLink, setUserLink] = useState<UserLink[]>([]);
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route element={<Users />} path="/" />
        <Route
          element={
            <UserProfile userLink={userLink} setUserLink={setUserLink} />
          }
          path="/user/:id"
        />
      </Routes>
    </Fragment>
  );
}
const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
  body{
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default App;
