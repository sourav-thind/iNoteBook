import React from 'react';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

const MainImage = () => {
  return (
    <> 
    
    <style type='text/css'> 
    {
        `
       #img {
            height:600px;
            width: 95%;
        }
        .both{
          
            height:70px;
            width:160px;
            top: 74%;
        }
        .img-btn1{
            left:36%
        }
        .img-btn2{
            left: 48%
        }
        .third{
          
            height:70px;
            width:350px;
            top: 74%;
        }
        .h5{
            top: 40%;
            color:black;
            left: 9%;
        }
        .p{
            top: 61%;
            color:black;
            left:9%
        }

        `
    }
    </style>
    <div >
     <Image src={require('./Images/Main.jpg')} className="mt-2 mx-0" id="img"  alt="Responsive image"/>
     <h5 className='carousel-caption h5'>Store your notes in cloud and <br/> access them from anywhere</h5>
     
     {!localStorage.getItem('token')?<div>
     <p className='carousel-caption p ' > Join our community by Signing up <br/>or Login if you already have an account</p>
      <Link className="btn btn-primary carousel-caption both img-btn1  "  to='/login'><h4>Login</h4></Link> 
     <Link className="btn btn-primary carousel-caption both img-btn2 " to='/signup'><h4>Sign UP</h4></Link></div>:
     <div>
        <p className='carousel-caption p ' >You are Logged in. <br/> Here are Your Notes</p>
        <Link className="btn btn-primary carousel-caption third img-btn1 " to='/Notes'><h4> Your Notes</h4></Link></div>
     }

    </div>
    </>
  )
}

export default MainImage
