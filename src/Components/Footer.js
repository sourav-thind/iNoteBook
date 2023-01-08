import React from 'react'
import { Link } from 'react-router-dom'

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
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
      <li className="nav-item"><Link to="/notes" className="nav-link px-2 text-muted">Notes</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-link px-2 text-muted">About</Link></li>
    </ul>
    <p className="text-center text-muted">© 2023 Company, Inc</p>
  </footer>
</div>
    </div>
  )
}

export default Footer
