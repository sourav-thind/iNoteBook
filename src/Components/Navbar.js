import React from 'react';
import { Link, useLocation, useNavigate} from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div ></div>
    <div className="container-fluid  ">
      <Link className="navbar-brand  text-light" to="/">iNoteBook</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/about"?"active":""} `} aria-current="page" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/notes"?"active":""}`} to="/notes">Notes</Link>
          </li>
         
            
        </ul>
      </div>
        {!localStorage.getItem('token')?<form>
        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
        </form>:<button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
    </div>
  </nav>
  )
}

export default Navbar
