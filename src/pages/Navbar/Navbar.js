import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/AuthContext';
import { googleLogout } from '@react-oauth/google';

export default function Navbar() {
  const auth = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    auth.setUser(null)
    auth.setRole(null)
    googleLogout();
    navigate({ pathname: '/login' })
  }

  console.log('checkpoint1', auth);


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {!!auth.user?.username ? `Merhaba, ${auth.user.username}` : 'Navbar'}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li hidden={auth.user.roleId !== 1} className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
          <form className="d-flex" style={{ whiteSpace: 'nowrap' }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success me-4" type="submit">
              Search
            </button>
            <button className="btn btn-danger btn-block" type="button" onClick={logout}>
              Sign out
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
