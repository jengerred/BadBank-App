
import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function Deposit({loggedInUser, updateUser, updateUserBalance}) {
  const [amount, setAmount] = useState("");
  const ctx = useContext(UserContext);
  const [status, setStatus] = useState("");

  const handleDeposit = () => {
    if (!validate(amount, "amount")) return;

    const updatedUser = { ...loggedInUser, balance: loggedInUser.balance + Number(amount) };
    updateUser(updatedUser);
    updateUserBalance(updatedUser);
    showSuccess();
  };

  function reset() {
    setTimeout(() => {
      setStatus("");
      setAmount("");
    }, 4000);
  }

  function showSuccess() {
    setStatus(`Your deposit of $${amount} was successful!`)
    reset();
  }

  function validate(field, label) {

    if (isNaN(field)) {
      setStatus("Error: " + label + " should be a number.");
      reset();
      return false;
    } else if (Number(field) < 0) {
      setStatus("Error: " + label + " cannot be negative.");
      reset();
      return false;
    }
    else if (!field) {
      setStatus("Error: " + label + " cannot be empty.");
      reset();
      return false;
    }
    return true;
  }

  return (
  
         <Container className="d-outside-card">
      <Card  className="center-card" style={{ maxWidth: "20rem"}}>
         
          <Card.Header  style={{ backgroundColor: "#008000" }} className="d-white-text" tag="h4">
              Deposit Amount
            </Card.Header>
            <Card.Body>
            <Card.Subtitle >
              Account Balance: ${loggedInUser.balance}
            </Card.Subtitle>
       <br></br>
          <Form>
            <input
              type="text"
              className="form-control"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <br />
            {status && <p>{status}</p>}
            <Button
              type="button"
              style={{ backgroundColor: "#008000" }}
              onClick={handleDeposit}
              disabled={status !== "" || amount === ""}
            >
              Deposit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      </Container>
    
  );
}

export default Deposit;