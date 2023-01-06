import React ,{useEffect} from 'react';
import { Link, useLocation} from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location])
  
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
        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
        <Link className="btn btn-primary mx-1" to="signup" role="button">Signup</Link>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
