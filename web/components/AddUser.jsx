// library imports
import { useState } from "react/";

// component imports
import Button from "./Button";
import Input from "./Input";
import styles from "./AddUser.module.css";

const AddUser = ({ addNewUser }) => {
  // set whether or not the component is a popup form
  const [isPopup, setIsPopup] = useState(false);
  const [user, setUser] = useState({});

  const togglePopup = () => {
    setIsPopup(!isPopup);
  };

  // submit changes to our API
  const handleSubmit = async () => {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const resJSON = await res.json();

    setUser({});
    togglePopup();

    addNewUser(resJSON.user);
  };

  if (isPopup)
    return (
      <div className={styles.formContainer}>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <div className={styles.form}>
          <h3>Create new user</h3>
          <table>
            <tbody>
              <Input
                value={user}
                setValue={setUser}
                name="first_name"
                type="text"
                title="First Name"
              />
              <Input
                value={user}
                setValue={setUser}
                name="last_name"
                type="text"
                title="Last Name"
              />
              <Input
                setValue={setUser}
                value={user}
                name="email"
                type="email"
                title="Email"
              />
              <Input
                setValue={setUser}
                value={user}
                name="tel"
                type="tel"
                title="Phone"
              />
              <Input
                value={user}
                setValue={setUser}
                name="password"
                type="password"
                title="Password"
              />
            </tbody>
          </table>
          <div className={styles.buttonContainer}>
            <Button title="Submit" onClick={handleSubmit} />
            <Button title="Cancel" onClick={togglePopup} />
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <Button title="Add a user" onClick={togglePopup} />
    </div>
  );
};

export default AddUser;
