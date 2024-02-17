import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/useAuth'


type Props = {}

const Header = (props: Props) => {

  const {isLoggedIn, user, logout} = useAuth();

  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <Link className="navbar-brand" to="/">StockPro</Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">Search</Link>
        </li>
      </ul>
      {isLoggedIn() ? (
          <div className="d-flex">
        <a className="btn btn-outline-primary btn-login">
            <i className="ri-user-6-fill"></i> 
            Welcome, {user?.userName}
            </a>
        <a onClick={logout} className="btn btn-outline-danger btn-logout">
            <i className="ri-user-6-fill"></i> 
            Logout
        </a>
      </div>
      ) :
       (
        <div className="d-flex">
        <Link to="/register" className="btn btn-outline-primary btn-login">
            <i className="ri-user-6-fill"></i> 
            Register
            </Link>
        <Link to="/login" className="btn btn-outline-succes btn-logins">
            <i className="ri-user-6-fill"></i> 
            Sign In
        </Link>
      </div>
      )}
      
    </div>
  </div>
</nav>
   </>
  )
}

export default Header