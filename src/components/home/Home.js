import React from 'react'
import Cards from '../servicesCards/Cards'
import InsuranceSection from '../insurance/InsuranceSection';
import WhatWeDo from '../whatWeDo/WhatWeDo';
import ContactForm from '../contact/ContactForm';
import Conditions from '../conditions/Conditions';
import MissionHome from '../mission/MissionHome';



const home = () => {
  return (
    <>
    <Cards />
    <Conditions />
    <WhatWeDo />
    <InsuranceSection />
    <MissionHome />
    <ContactForm />
    </>
  )
}

export default home
