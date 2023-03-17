import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import Users from "./components/fetchUsers";
import { Route, Routes, useLocation } from "react-router-dom";
import UserProfile from "./components/userProfile";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route element={<Users />} path="/" />
        <Route element={<UserProfile />} path="/user/:id" />
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
    height: 100vh;
  }
`;
export default App;
