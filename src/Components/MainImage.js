import React from 'react';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';

const MainImage = () => {
  return (
    <> 
    
    <style type='text/css'>{`
    #img {
        height: auto;
        max-width: 100%;
    }

    // .both {
    //     height: 70px;
    //     width: 100%;
    //     display: flex;
    //     justify-content: space-between;
    //     margin-top: 2%;
    // }

    .img-btn1 {
        width: 40%;
    }

    .img-btn2 {
        width: 40%;
    }

    .third {
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 2%;
    }

    .h5 {
        color: black;
        text-align: center;
        margin-top: 5%;
    }

    .p {
        color: black;
        text-align: center;
        margin-top: 5%;
    }
`}
</style>

    <div >
     <Image src={require('./Images/Main.jpg')} className="mt-2 mx-0" id="img"  alt="Responsive image"/>
    
     {/* {!localStorage.getItem('token')?<div className='flex flex-col'>
     <p className='carousel-caption p ' > Join our community by Signing up <br/>or Login if you already have an account</p>
      <Link className="btn btn-primary carousel-caption both img-btn1  "  to='/login'><h4>Login</h4></Link> 
     <Link className="btn btn-primary carousel-caption both img-btn2 " to='/signup'><h4>Sign UP</h4></Link></div>:
     <div>
        <p className='carousel-caption p ' >You are Logged in. <br/> Here are Your Notes</p>
        <Link className="btn btn-primary carousel-caption third img-btn1 " to='/Notes'><h4> Your Notes</h4></Link></div>
     } */}

    </div>
    </>
  )
}

export default MainImage
