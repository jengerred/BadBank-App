import React, { useContext } from 'react';
import { UserContext } from '../App';
import {Navbar, NavbarBrand, NavItem, Nav} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap';

export function NavBar ({loggedInUser}) {
    const ctx = useContext(UserContext);
    const location = useLocation();

    return (
      
        <Navbar style={{backgroundColor:"#D3D3D3"}} light expand='md'>
           <NavbarBrand tag={Link} to='/' style={{marginLeft:"10px"}}>Banking App</NavbarBrand>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            
              { !loggedInUser ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" tag={Link} to='/create-account'>Create Account</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" tag={Link}  to="/login">Log In</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" tag={Link} to="/deposit">Deposit</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" tag={Link} to="/withdraw">Withdraw</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" tag={Link} to="/all-data">All Data</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Navbar>
     
    );
}