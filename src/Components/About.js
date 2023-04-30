import React from 'react'
import { Carousel } from "react-bootstrap";
import myimg from './Images/myimg.jpg'


function About() {
  return (
   

<div>
    <Carousel>
      <Carousel.Item>
        <div className="d-block mx-1 my-1 w-96 h-50 bg-dark text-light">
        <div className="container py-5 px-5">
      <div className="row">
        <div className="col-md-6">
          <h2>About Developer</h2>
          <p className="lead text-justify">This FullStack MERN application is Developed By Souravpreet Singh. Got Introduced to programming in mid school in India. He recently moved to Canada for stdies, which he Graduated in April 2023 From Sheridan College. Apart From React Sourav has worked on ton of other languages and frameworks which includes but are not limited to following:- C, C++, Python and its several libraries, Java, Springboot, C#, .NET, ASP .NET. Always focus on learning, He now look out to secure a career in Development. </p>
       
        </div>
        <div className="col-md-6">
        <img src={myimg} className="img-fluid rounded-circle p-0" style={{ height: "300px" }} alt="My Image" />

        </div>
      </div>
    </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-block mx-1 my-1 w-96 h-50 bg-dark text-light">
        <div className="container py-5 px-5">
      <div className="row">
        <div className="col-md-12">
          <h2 className=''>Application and Functioning </h2>
          <p className="lead  text-justify  line-space"> <strong> INoteBook</strong> We are here to help you organise your notes, but it doesnot end at just organising, This Application saves your Note to the cloud so that even after 10 years you login into your account you will still see it there, waiting for you. Apart from Title and Description you can also provide Tags for your Note For Better Organisation. You don't need to worry if you worte something wrong or you want to change it, you can also Edit the Note as you want. Well If there is Add and Edit there is Definately Gonna be a Delete and there is. Apart from the core functioning the User Interface of the application is kept sleek and modern. There's another version of this application that uses MongoDB Compass and runs on localhost You will see it on 5th commit. For Code Visit <a href="https://github.com/sourav-thind/iNoteBook">CLICK HERE</a>. </p>
          
        </div>
        
      </div>
    </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-block mx-1 my-1 w-96 h-50 bg-dark text-light">
          <div className="container py-4 px-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Resourses Used</h2>
          
          <ul className="list-group pb-4">
            <li className='list-group-item bg-dark text-light fs-5'>ReactJS</li>
            <li className='list-group-item bg-dark text-light fs-5'>NodeJS</li>
            <li className='list-group-item bg-dark text-light fs-5'>ExpressJS</li>
            <li className='list-group-item bg-dark text-light fs-5'>MongoDB Atlas</li>
            <li className='list-group-item bg-dark text-light fs-5'>BootStrap</li>
            <li className='list-group-item bg-dark text-light fs-5'>Mongoose</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className=' '>Resource Usage</h2>
          <p className='text-justify mx-5 lead'>ReactJs is the main Framework used, along with that  NodeJS Provided the runtime Environment for Application, and ExpressJs Was used to handle CRUD operations and database dealing.So there's gotta be a place where we are storing our Notes and Credentials, MongoDB Atlas is handling the part. If you are impressed by the sleek and eye-catching design, You gotta give credit to Bootstrap in the hood. And Mongoose was used for Object Data Modelling.</p>
        </div>
      </div>
    </div></div>
      </Carousel.Item>
    </Carousel>
   
    </div>
  );
}


export default About
