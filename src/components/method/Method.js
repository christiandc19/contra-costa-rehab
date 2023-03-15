import React from 'react'
import Fade from 'react-reveal/Fade';
import './Method.css'

import Wave from '../../assets/waves.svg'


const Method = () => {
    return (
        <>

        <div className='method main-menu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" alt='wave divider' repeat-x/>
            </div>
                    <div className="method-content">
                        <Fade right>
                            <h1>OUR METHOD</h1>
                        </Fade>
                        
                    </div>
                </div>
        </>
    )
}

export default Method