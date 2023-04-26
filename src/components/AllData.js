
import React, {useState} from 'react';
import { Card, Table } from 'react-bootstrap';


export function AllData({users}) {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
    <Card className="white" style={{ width: '35rem' }}>    
        <Card.Header style={{ fontSize: '30px', textAlign: "center" }}>All Data</Card.Header>
        <Card.Body>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>${user.balance}</td>
            </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
    </div>
  );
}

export default AllData;