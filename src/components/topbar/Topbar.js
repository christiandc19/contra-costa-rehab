import React from 'react'
import './Topbar.css'

const Topbar = () => {
  return (
    <div className='topbar' name='top'>
            <div className='topbar-content container'>
                <div className='address bar-box1'>
                    <p>3700 Sunset Ln, Antioch, CA</p>
                </div>

                <div className='email bar-box2'>
                    <p>info@contracosta.com</p>
                </div>

                <div className='number bar-box3'>
                    <p> +1 (323) 792-0502</p>
                </div>

            </div>
      
    </div>
  )
}

export default Topbar
