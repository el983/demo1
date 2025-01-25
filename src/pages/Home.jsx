import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../images/form pic.jpeg'
import Footer from '../components/Footer'
import './Home.css';
import { useState } from 'react';
import Whatsapp from '../components/Whatsapp.';
import { toast } from "react-toastify";
import sap from '../images/sap.png';
import img1 from '../images/sap.png';

const Home = () => {

  const [ user, setUser ] = useState({
    name: "",
    contact: "",
    email: "",
  });

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendEmail();
    console.log(user);
    const response = await fetch(`http://localhost:5000/api/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),

    })
    .then((response)=>{
      console.log(response);
      if (response.status==200) {
        toast.success("User Registered Successfully! We will contact you soon.");
      }
      if(response.status==400){
        toast.error("User Already Existed!");
      }
    })
    
  };
  const sendEmail = async () => {
    const res = await fetch(`http://localhost:5000/api/mail/sendmail`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
      });
  };
  
  return (
    <>
    
    <Whatsapp/>
    <Navbar/>
        <div className="home-main">
          <div> 
        <div className="nav-pic">
                <img src={sap} alt="" />
        </div>  
        <div className="home-head">
          <div className="home-heading-for-all">
            <h1>Corporate training</h1>
            <div className='head-point'>
              <h3>SAP IBP Training Course Objective</h3>
              <div className="home-drop-down" id='a'>
                <ul>
                  <li>The participants will understand the SAP IBP Platform value proposition, and its applications, including Inventory, Demand, Response & Supply, and Control Tower.
                  </li>
                  <li>The participants will understand the technical aspects of the IBP solutions, such as IBP Configuration and IBP Integration.</li>
                  <li>The participants will understand the technical aspects of the IBP solutions, such as IBP Configuration and IBP Integration.</li>
                  <li>The participants will understand the technical aspects of the IBP solutions, such as IBP Configuration and IBP Integration.</li>
                  

                </ul>
              </div>              
            </div>
          </div>
          <div className="home-heading-for-all">
          <h1>Educational consultancy</h1>
            <div className='head-point'>
              <h3>SAP IBP Training Prerequisite</h3>
              <div className="home-drop-down" id='a1'>
                <ul>
                  <li>The aspirants of this course should carry basic knowledge of the Supply Chain Planning domain and a basic understanding of SAP Supply Chain Planning solutions, such as SAP Advanced Planning & Optimization APO.
                  </li>                  
                </ul>
              </div>              
            </div>
          </div>
          <div className="home-heading-for-all">
          <h1>Global Admission Service</h1>
            <div className='head-point'>
              <h3>SAP IBP Training Target Audience</h3>
              <div className="home-drop-down">
                <ul>
                  <li>SCM Practice Managers at SAP Implementation Providers</li>
                  <li>Business Planners or IT Team Members at Customer Organizations</li>
                  <li>Students who are looking to jumpstart their career in SAP/Supply Chain</li>
                  <li>SAP SCM (APO) Practitioners who are looking to ramp-up on IBP</li>
                </ul>
              </div>              
            </div>
          </div>
          </div>  
        </div>
      </div>
    <Footer/>
    </>
    
  )
  
}

export default Home;
