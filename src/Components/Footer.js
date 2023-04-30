import React from 'react'
import { Link } from 'react-router-dom'
import linkedinLogo from './Images/linkedin.png'
import githubLogo from './Images/github.png'
const Footer = () => {
  return (
    <div id='back' className='mx-0  my-0'>
        <style type='text/css'> 
    {
        `
        #back{
            background-color: #042743;
            color:white
        }
        `
    }
    </style>
      <div className="container   my-0" >
  <footer className="py-4">
    {/* <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item text-light"><Link to="/" className="nav-link px-2 text-light">Home</Link></li>
      <li className="nav-item text-light"><Link to="/notes" className="nav-link px-2 text-light">Notes</Link></li>
      <li className="nav-item text-light"><Link to="/about" className="nav-link px-2 text-light">About</Link></li>
    </ul> */}
    <div className="container border-bottom pb-3 mb-3">
        <div className="d-flex justify-content-center">
          <a
            href="https://www.linkedin.com/in/sourav-thind/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              className="social-logo rounded-circle"
              style={{width: '50px', height: '50px'}}
            />
          </a>
          <a
            href="https://github.com/sourav-thind"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <img
              src={githubLogo}
              alt="GitHub"
              className="social-logo rounded-circle"
              style={{width: '50px', height: '50px'}}
            />
          </a>
        </div>
      </div>
    <p className="text-center text-light">© 2023 Company, Inc</p>
  </footer>
  
</div>
    </div>
  )
}

export default Footer
