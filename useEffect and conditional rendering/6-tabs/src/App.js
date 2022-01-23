import React, { useState, useEffect } from "react";
import Users from "./Users";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch((error) => setIsError(error));
  }, []);
  console.log(users);
  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (isError) {
    return (
      <>
        <h2>Error</h2>
        <p>{isError}</p>
      </>
    );
  }

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <Users users={users}></Users>
      </section>
    </>
  );
}

export default App;
