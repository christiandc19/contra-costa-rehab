import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'




const Hero = () => {
    return (
        <div className='hero'>

            <div className="hero-container">
                <div className="content">
                    


                    <Fade bottom>
                        <h1>CONTRA COSTA</h1>
                    </Fade>
                    <Fade bottom>
                        <h2 className='subtitle'>SUBSTANCE ABUSE ADDICTION AND MENTAL HEALTH TREATMENT FACILITY</h2>
                    </Fade>
                        <p>Find your happiness and learn to put it first.</p>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/treatment">
                        <button>Learn More</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero