
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { CreateAccount } from './components/CreateAccount';
import { Login } from './components/Login';
import { Deposit } from './components/Deposit';
import { Withdraw } from './components/Withdraw';
import { AllData } from './components/AllData';
import { useEffect, useState, createContext } from 'react';
import './App.css';


export const UserContext = createContext(null);

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);
  function updateUser(user) {
    setLoggedInUser(user);
  }
  function addUser(user) {
    setUsers([...users, user]);
  }
  function updateUserBalance(user) {
    const updatedUsers = users.map(u => {
      if (u.email === user.email) {
        return user;
      }
      return u;
    });
    setUsers(updatedUsers);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{users:[]}}>
          <NavBar loggedInUser = {loggedInUser} />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-account" element={<CreateAccount addUser={addUser} />} />
            <Route path="/login" element={<Login updateUser={updateUser} users={users}/>} />
            <Route path="/deposit" element={<Deposit updateUser={updateUser} loggedInUser = {loggedInUser} updateUserBalance={updateUserBalance} />} />
            <Route path="/withdraw" element={<Withdraw updateUser={updateUser} loggedInUser = {loggedInUser} updateUserBalance={updateUserBalance} />} />
            <Route path="/all-data" element={<AllData users= {users} />} />
          </Routes>
          <br />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;


