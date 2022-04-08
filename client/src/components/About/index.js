import React from 'react';
import logo from '../../assets/images/logowhatsgood_brown.svg'
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

import './index.css'

function About() {
  return (
    <div className='container animate__animated animate__fadeIn'>
        <Col sm={80} classname='m-auto'>
        <img className='mt-5' src={logo} style={{ width: "65%" }} />
        <h1 className='mt-5 mb-5'>About</h1></Col>
        <p className='mb-5' >Make the best choice in deciding where to invest your time and money with our Whats-Good mobileapp. It allows BIPOC clients to view and post 
          reviews about their experiences through the lenses of Black people. Our app is to bring awareness to Black peoples' experiences, whether they be 
          positive or negative. In doing so, other Black people and allies can be aware of businesses' ethics, customer service and more to ensure a beneficial 
          experience overall. <br></br><br></br>Whats-Good mobile app is designed with tools to give Black people foresight into what type of businesses they are will
           giving their resources to more confidently.</p>
        <button type='submit' className='btn-wg'><h2 as={Link} to='/search'>SAY LESS</h2></button>
    </div>
   



  )
}

export default About;