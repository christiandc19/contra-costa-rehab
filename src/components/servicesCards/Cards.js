import React from 'react'
import './Cards.css'
import ServicesCards from '../props/CardProps';

import Fade from 'react-reveal/Fade';


import Card1 from '../../assets/card1.jpg'
import Card2 from '../../assets/card2.jpg'
import Card3 from '../../assets/card3.jpg'


const Cards = () => {
  return (
    <>

            <div className="cards-header container">
                <h1>WE OFFER VARIOUS SERVICES </h1><br/>
                <p>At Contra Costa Rehab Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
            </div>
            



<Fade bottom>
<div className='main-box container'>
<div className='card-box'>
    <div class="a-box">
        <div class="img-container">
            <div class="img-inner">
                <div class="inner-skew">
                    <img src={Card1} width="300px" height="350px" alt="Palm Springs Rehab Logo" loading="lazy" />
                </div>
            </div>
        </div>
    </div>

        <div class="text-container">
            <h3>MENTAL HEALTH TREATMENT</h3>
        <div>
            <p>Some of our clients are here to attend to their mental health, and some come to us for help with addiction and sobriety. Depending on your needs, we offer treatment for co-occurring disorders that can address both mental health and addiction disorders at the same time.</p>
        </div>
    </div>
</div>




<div className='card-box'>
    <div class="a-box">
        <div class="img-container">
            <div class="img-inner">
                <div class="inner-skew">
                    <img src={Card2} width="300px" height="350px" alt="Palm Springs Rehab Logo" loading="lazy" />
                </div>
            </div>
        </div>
    </div>

        <div class="text-container">
            <h3>SUBSTANCE USE TREATMENT</h3>
        <div>
            <p>No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Contra Costa Rehab Center.</p>
        </div>
    </div>
</div>



<div className='card-box'>
    <div class="a-box">
        <div class="img-container">
            <div class="img-inner">
                <div class="inner-skew">
                    <img src={Card3} width="300px" height="350px" alt="Palm Springs Rehab Logo" loading="lazy" />
                </div>
            </div>
        </div>
    </div>

        <div class="text-container">
            <h3>EMPLOYMENT ASSISTANCE</h3>
        <div>
            <p>We offer a variety of employment tools and resources to help you land on your feet and get hired at a great company in recovery.</p>
        </div>
    </div>
</div>
</div>
</Fade>

    </>
  )
}

export default Cards
