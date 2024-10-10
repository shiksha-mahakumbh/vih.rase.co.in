'use client';
import React from 'react'
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import CompanyInfo from '../Component/CompanyInfo';
import ContactUs from '../Component/ContactUs';


const page = () => {
  
    
    return (
        <div className="bg-white">
        <CompanyInfo/>
        <Header/>
        <div className= "flex flex-row">
        <div className="md:w-1/6"></div>
        <div className="md:w-4/6">
        <ContactUs/>
       
        </div>
        <div className="md:w-1/6"></div>
        </div>
        <Footer/>
       </div>
      )
  
}

export default page