import React from 'react'
import Fade from 'react-reveal/Fade';
import './Method.css'

import Wave from '../../assets/waves.svg'
import MethodHero from "../../assets/method.png"

const Method = () => {
    return (
        <>

        <div className='method main-menu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" alt='wave divider' repeat-x/>
            </div>
                    <div className="method-content">
                        <Fade right>
                            <div className='method-content-left'>
                                <h1>OUR METHOD</h1>
                            </div>

                            <div className='method-content-right'>
                                <img src={MethodHero} alt='group of friends' />
                            </div>
                            
                        </Fade>
                        
                    </div>
                </div>
        </>
    )
}

export default Method