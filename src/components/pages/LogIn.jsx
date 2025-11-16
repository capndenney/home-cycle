import Button from "../common/Button";
import Input from "../common/Input";
import { useState } from "react";
import sampleUsers from "../../sampleData/sampleUsers";

const LogIn = ({ logInStatus, setLogInStatus }) => {
  const credentialFormat = { username: "", password: "" };
  const [creds, setCreds] = useState(credentialFormat);

  function validateLogin(inputUsername, inputPassword) {
    return sampleUsers.some((credentials) => {
      return (
        credentials.username === inputUsername &&
        credentials.password === inputPassword
      );
    });
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCreds((oldData) => ({ ...oldData, [id]: value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (validateLogin(creds.username, creds.password)) {
      setLogInStatus(true);
    } else {
      console.log("invalid credentials"); //TODO: Add element insertion for wrong password
    }
  };

  return (
    <div className="log-in card add-blur">
      <h2>Log In</h2>
      <Input
        label="Username:"
        value={creds.username}
        id="username"
        handleChange={handleChange}
      />
      <Input
        label="Password:"
        value={creds.password}
        type="password"
        id="password"
        handleChange={handleChange}
      />
      <Button
        label="Log In"
        id="log-in-button"
        handleClick={handleClick}
      />
    </div>
  );
};

export default LogIn;
