import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import FetchUsers from "./components/fetchUsers";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <FetchUsers />
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
