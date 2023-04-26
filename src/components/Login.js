
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from 'react-bootstrap';

export function Login({updateUser, users}) {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 4000);
      return false;
    }
    return true;
  }
  
  function handleLogin() {
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      updateUser(user);
      navigate("/");
    } else {
      navigate("/create-account");
    }
  }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
    <Card className="white" style={{ width: '35rem' }}>
        <Card.Header style={{ backgroundColor: "#0275d8" }} className="w-white-text">Log In</Card.Header>
        <Card.Body>
          <>
            <br/>
            Email address:
            <br />
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/><br />

            Password:
            <br />
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/><br />

            {status && <p>{status}</p>}

            <button className="white-text" type="button" style={{ backgroundColor: "#0275d8" }}
              onClick={handleLogin}>
              Login
            </button>
          </>
      </Card.Body>
    </Card>
    </div>
  );
}