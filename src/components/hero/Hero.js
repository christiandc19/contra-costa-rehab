import React from 'react'
import Fade from 'react-reveal/Fade';
import './Hero.css'

const Hero = () => {
    return (
<>        
        <div className='hero'>



            <div className="hero-container">
                <div className="content">
                <Fade right>

                        <h1 className="animate-charcter">CONTRA COSTA REHAB</h1>
                        </Fade>

                    <Fade left>
                        <h2 className='subtitle'>MENTAL HEALTH TREATMENT FACILITY</h2>
                    </Fade>
       
                    <Fade bottom>
                        <p>"Start your treatment journey with us"</p>
                    </Fade>
                </div>
            </div>
        </div>


</>

    )
}

export default Hero