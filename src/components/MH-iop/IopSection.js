import React from 'react'
import Fade from 'react-reveal/Fade';

import './IopSection.css'

import { FaRegStar } from 'react-icons/fa';
import IopSection1 from '../../assets/IopSection1.jpg'

import Contact2 from '../contact/Contact2'


const IopSection = () => {
  return (
    <>

<div className='iop-header'>
    <h1 className='header'>INTENSIVE OUTPATIENT PROGRAM (IOP)</h1>
    <p>No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Contra Costa.</p>
</div>


<div className='iop-wrap'>
    <Fade left>
    <div className="iop-wrap-left">
        <h1 className='header'>WHY CHOOSE AN IOP?</h1>
        <br/>
        <p>It is common for those struggling with addiction to not respond well to  residential treatment options. An intensive outpatient program may be the best alternative, as it can offer a high level of care and more accountability (removing patients from access to drugs/alcohol, enabling peers, etc.).
        <br /> <br/>
        If the patient has a strong, supportive family and group of friends/peers, they will be able to undergo care with us, but also be able to live at home. </p>
        <br />
        <h1 className='header'>WHAT TO EXPECT THROUGHOUT THE PROGRAM</h1>
        <br/>
        <p>Considered our mid-tier intensive care, the program consists of 3 hours of clinical services 3-5 days per week. Patients also participate in group therapy sessions (2 per day) with any additional sessions available if deemed necessary. We also offer several other therapeutic options, such as:</p>
        <br />
        <ul>
            <li><FaRegStar className='star'/> Art therapy</li>
            <li><FaRegStar className='star'/> Hypnotherapy</li>
            <li><FaRegStar className='star'/> Family Theraphy</li>
            <li><FaRegStar className='star'/> Cognitive-behavioral therapy</li>
        </ul>
    </div>
    </Fade>

        <Fade right>
            <div className="iop-wrap-right">
                <img src={IopSection1} alt="IOP Counselling Session" loading="lazy" />
            </div>
        </Fade>
    </div>
    


{/* WRAP 2 */}


<div className='iop-wrap'>

    <Fade right>
            <div className="iop-wrap-right">
                <img src={IopSection1} alt="IOP Counselling Session" loading="lazy" />
            </div>
    </Fade>


    <Fade left>
    <div className="iop-wrap-left">
        <h1 className='header'>WHY CHOOSE AN IOP?</h1>
        <br/>
        <p>It is common for those struggling with addiction to not respond well to  residential treatment options. An intensive outpatient program may be the best alternative, as it can offer a high level of care and more accountability (removing patients from access to drugs/alcohol, enabling peers, etc.).
        <br /> <br/>
        If the patient has a strong, supportive family and group of friends/peers, they will be able to undergo care with us, but also be able to live at home. </p>
        <br />
        <h1 className='header'>WHAT TO EXPECT THROUGHOUT THE PROGRAM</h1>
        <br/>
        <p>Considered our mid-tier intensive care, the program consists of 3 hours of clinical services 3-5 days per week. Patients also participate in group therapy sessions (2 per day) with any additional sessions available if deemed necessary. We also offer several other therapeutic options, such as:</p>
        <br />
        <ul>
            <li><FaRegStar className='star'/> Art therapy</li>
            <li><FaRegStar className='star'/> Hypnotherapy</li>
            <li><FaRegStar className='star'/> Family Theraphy</li>
            <li><FaRegStar className='star'/> Cognitive-behavioral therapy</li>
        </ul>
    </div>
    </Fade>

    </div>



<Contact2 />

    </>
  )
}

export default IopSection
