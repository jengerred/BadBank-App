
import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { Card, Button, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

export function Withdraw({loggedInUser, updateUser, updateUserBalance}) {
  const [amount, setAmount] = useState("");
  const ctx = useContext(UserContext);
  const [status, setStatus] = useState("");

  const handleWithdraw = () => {
    if (!validate(amount, "amount")) return;


    const updatedUser = { ...loggedInUser, balance: loggedInUser.balance - Number(amount) };
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
    setStatus(`Your withdrawl of $${amount} was successful!`)
    reset();
  }

  function validate(field, label) {

    if (isNaN(field)) {
      setStatus("Error: enter numerical values only.");
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



    else if (loggedInUser.balance - Number(amount) < 0) {
      setStatus("Insufficient Funds! Sorry you do not have enough funds to process this transaction.");
      reset();
      return false;
    }
    return true;
  }

  return (
    <Container className="outside-card">
      <Card className="center-card" style={{ maxWidth: "20rem" }}>     
          <Card.Header style={{backgroundColor:"#FF0000"}} className="w-white-text" tag="h4">Withdraw Amount</Card.Header>
          <Card.Body>
          <Card.Text>Balance ${loggedInUser.balance}</Card.Text>
          <Form>
            <input type="text" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <br />
            {status && <p>{status}</p>}
            <Button type="button" style={{backgroundColor:"#FF0000"}} onClick={handleWithdraw} disabled={status !== "" || amount === ""}
            >
              Withdraw
            </Button>
          </Form>
        </Card.Body>
      </Card>
  </Container>
  );
}

export default Withdraw;