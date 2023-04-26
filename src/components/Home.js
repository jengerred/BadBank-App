
import React from 'react';
import Img from '../images/bank.png';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

export function Home() {
  return (
    <>
    <h1 style={{ textAlign: "center" }}>Welcome To The Banking App</h1>
       <Card  color="light" style={{ textAlign: "center", margin: "10px" }}>
            <Card.Body>
                <Card.Title tag="h5">BadBank Landing Module</Card.Title>
                <Card.Subtitle>Welcome to the bank</Card.Subtitle>
                <br/>
                <Card.Img 
                    src={Img}
                    alt="Card Image Caption"
                    style={{ width: "20rem" }}
                />
                <Card.Text>You can move around using the navigation bar</Card.Text>

                <div className="home-buttons">
                <Card.Text>Please Create a New Account to get started or to start over.</Card.Text>
                <a href="/create-account"><Button style={{ backgroundColor:"#0275d8", marginBottom: "30px" }} >Create New Account</Button></a>
                </div>
            </Card.Body>
        </Card>
        </>
  );
}

export default Home;

