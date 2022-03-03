//library imports
import { useState, useEffect } from "react";
import AddUser from "../../components/AddUser";

// component imports
import User from "../../components/User";
import styles from "../../styles/Test.module.css";

const Test = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/user")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      });
  }, []);

  const addNewUser = (user) => {
    setUsers([...users, user]);
  };

  if (isLoading)
    return (
      <div className={styles.container}>
        <h1>Loading Users</h1>
      </div>
    );

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <div className={styles.users}>
        {users.map((user, idx) => (
          <User {...user} key={idx} />
        ))}
      </div>
      <AddUser addNewUser={addNewUser} />
    </div>
  );
};

export default Test;
