import React from 'react'
import Cards from '../servicesCards/Cards'
import InsuranceSection from '../insurance/InsuranceSection';
import WhatWeDo from '../whatWeDo/WhatWeDo';
import ContactForm from '../contact/ContactForm';
import Conditions from '../conditions/Conditions';



const home = () => {
  return (
    <>
    <Cards />
    <Conditions />
    <WhatWeDo />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
