import React from "react";
import useFetchUsers from "./hooks/useFetchUsers";
function App() {
  const userList = useFetchUsers();
  return (
    <div className="App">
      <header className="App-header">
        {userList.length > 0
          ? userList.map((user) => {
              return (
                <div key={user.id}>
                  <p>{user.name}</p>
                  <p>{user.prefix}</p>
                  <p>{user.title}</p>
                  <img alt="rere" src={user.imageUrl} />
                </div>
              );
            })
          : null}
      </header>
    </div>
  );
}

export default App;
