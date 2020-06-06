import React from 'react';
import ReactDOM from 'react-dom';
import './nouveau.css';
import logo from './logo.png';
import fallvinyard from './fallvinyard.jpeg';
import picture from './lukePic.jpeg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ourteamcomponent from './ourTeamComponent';

function mailto () {
   window.location.href = "mailto:montytruitt@gmail.com";
};
 
const App = () => {
   return (
       <div>
            <div className="header_container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="contact_button_container">
                    <button type="button" className="contact_button" onClick={mailto}>Contact Us</button>
                </div>
            </div>
            <section class="hero">
                <div class="hero-content">
                    <h1 class="hero-title">
                     Nouveau
                    </h1>
     
                     <h2 class="hero-subtitle">
                       Enjoy The Upside of Wine
                     </h2>
                </div>
            </section>
            <div className="menu_container">
                <li><a href="#ourstory">Our Story</a></li>
                <li><a href="#ourstory">Our Product</a></li>
                <li><a href="#ourstory">The Benefits</a></li>
                <li><a href="#ourstory">Our Team</a></li>
            </div>
            <div className="story">
                Our Story
            </div>
            <div>
                timeline soon to be
            </div>
            <div className="ourProduct">
                <img src={fallvinyard} alt="vinyard in the fall" />
                <div className="product_container">
                    <h2> 
                     Wine Health Boost
                    </h2>
                    <p>
                    Lorem epsum tincidunt nisl. Ut sit amet arcu bibendum, egestas enim in, tristique diam. Fusce vel metus eget ante elementum laoreet eget non leo. Praesent vel magna diam. Donec tempus elit non magna eleifend, sed vestibulum diam pretium. Duis rutrum tellus dignissim, eleifend est gravida, molestie felis.
                    </p>
                </div>
            </div>
            <div className="theBenefits">
                <img src={fallvinyard} alt="vinyard in the fall" style={{marginTop: '167px'}} />
                <div className="benefits_container" >
                    <h2> 
                     Wine Health Boost
                    </h2>
                    <p>
                    Lorem epsum tincidunt nisl. Ut sit amet arcu bibendum, egestas enim in, tristique diam. Fusce vel metus eget ante elementum laoreet eget non leo. Praesent vel magna diam. Donec tempus elit non magna eleifend, sed vestibulum diam pretium. Duis rutrum tellus dignissim, eleifend est gravida, molestie felis.
                    </p>
                </div>
            </div>
            <div className="quickFacts">
                <img src={fallvinyard} alt="vinyard in the fall" style={{marginTop: '167px'}}/>
                <div className="facts_container" >
                    <h2> 
                     Wine Health Boost
                    </h2>
                    <p>
                    Lorem epsum tincidunt nisl. Ut sit amet arcu bibendum, egestas enim in, tristique diam. Fusce vel metus eget ante elementum laoreet eget non leo. Praesent vel magna diam. Donec tempus elit non magna eleifend, sed vestibulum diam pretium. Duis rutrum tellus dignissim, eleifend est gravida, molestie felis.
                    </p>
                </div>
            </div>
            <div className="ourTeam">
                Our Team
            </div>
            <div className="profile" style={{paddingTop: '36px'}}>
                <img src={picture} alt="avatar" className="profile_pic" />
                <div className="profile_container">
                    <h2>
                    Tom Peyton: CEO, Founder, & President
                    </h2>
                    <p>
                    Dr. Peyton received his BS in Molecular Biology and PhD in Bionucleonics from the School of Pharmacy at Purdue University. At Purdue University, Dr. Peyton worked as an Adjunct Professor of Environmental Health & Engineering. He founded American Technology Management Corporation (AmTech Consultants) in Washington DC that provided environmental, biotechnology, and health services to over 500 multinational clients including the US Congress’s Biotechnology Program.  
                    </p>
                </div> 
            </div>
            <br/>
            <div className="profile">
                <img src={picture} alt="avatar" className="profile_pic" />
                <div className="profile_container">
                    <h2>
                    Tom Peyton: CEO, Founder, & President
                    </h2>
                    <p>
                    Dr. Peyton received his BS in Molecular Biology and PhD in Bionucleonics from the School of Pharmacy at Purdue University. At Purdue University, Dr. Peyton worked as an Adjunct Professor of Environmental Health & Engineering. He founded American Technology Management Corporation (AmTech Consultants) in Washington DC that provided environmental, biotechnology, and health services to over 500 multinational clients including the US Congress’s Biotechnology Program.  
                    </p>
                </div> 
            </div>
            <br/>
            <div className="profile">
                <img src={picture} alt="avatar" className="profile_pic" />
                <div className="profile_container">
                    <h2>
                    Tom Peyton: CEO, Founder, & President
                    </h2>
                    <p>
                    Dr. Peyton received his BS in Molecular Biology and PhD in Bionucleonics from the School of Pharmacy at Purdue University. At Purdue University, Dr. Peyton worked as an Adjunct Professor of Environmental Health & Engineering. He founded American Technology Management Corporation (AmTech Consultants) in Washington DC that provided environmental, biotechnology, and health services to over 500 multinational clients including the US Congress’s Biotechnology Program.  
                    </p>
                </div> 
            </div>
            <div className="profile" style={{paddingTop: '18px', paddingBottom: '36px'}}>
                <img src={picture} alt="avatar" className="profile_pic" />
                <div className="profile_container">
                    <h2>
                    Tom Peyton: CEO, Founder, & President
                    </h2>
                    <p>
                    Dr. Peyton received his BS in Molecular Biology and PhD in Bionucleonics from the School of Pharmacy at Purdue University. At Purdue University, Dr. Peyton worked as an Adjunct Professor of Environmental Health & Engineering. He founded American Technology Management Corporation (AmTech Consultants) in Washington DC that provided environmental, biotechnology, and health services to over 500 multinational clients including the US Congress’s Biotechnology Program.  
                    </p>
                </div> 
            </div>
            <div className="getInTouch">
                Get In Touch
            </div>
            <div>
                <Form className="forms">
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control  placeholder="Jane Doe" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cell Phone Number</Form.Label>
                        <Form.Control  placeholder="Enter Number" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message or Question</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Enter Message/Question" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div>
                <Ourteamcomponent />
            </div>
       </div>
   )
};


 
 
 
ReactDOM.render(
   <App />,
   document.querySelector('#root')
)
