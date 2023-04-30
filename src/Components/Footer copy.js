import React from 'react'
import linkedinLogo from '../assets/linkedin.png'; 
import githubLogo from '../assets/github.png'; 

const Footer = () => {
  return (

    <footer className="footer bg-dark py-3 position-fixed bottom-0 w-100 ">
      <div className="container">
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
    </footer>
  )
}

export default Footer
