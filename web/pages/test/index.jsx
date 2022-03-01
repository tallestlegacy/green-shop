import { useState, useEffect } from "react";

const Test = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/user")
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <main>
        <h1>Loading</h1>
      </main>
    );

  return (
    <>
      <h1>Hello from the other side</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </>
  );
};

export default Test;
