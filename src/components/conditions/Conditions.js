import React from 'react'
import Fade from 'react-reveal/Fade';
import './Conditions.css'

import ConditionsLogos from './ConditionsLogos'

import ADHD from '../../assets/adhd.jpg'
import AngerDisorder from '../../assets/angerDisorder.jpg'
import AnxietyDisorder from '../../assets/anxietyDisorder.jpg'
import BipolarDisorder from '../../assets/bipolarDisorder.jpg'
import Depression from '../../assets/depression.jpg'
import PTSD from '../../assets/ptsd.jpg'
import SCHIZOAFFECTIVE from '../../assets/schizoaffective.jpg'
import SCHIZOPHRENIA from '../../assets/schizophrenia.jpg'

const Conditions = () => {
    return (
        <>

<div className='conditions'>

<div className='condition-icons-header container'>
    <h1>CONDITIONS WE TREAT</h1>
    <p>Our compassionate staff utilizes established medical treatments to decrease withdrawal effects in an empathetic environment. In the meantime, you’ll receive behavioral health care from experienced counselors to boost your chances for an effective recovery.</p>
</div>

<Fade bottom>

<div className='ConditionsLogosContainer container'>

<div className='conditions-icons'>
<ConditionsLogos Image={ADHD} />
<p>ADHD</p>
</div>

<div className='conditions-icons'>
<ConditionsLogos Image={AngerDisorder} />
<p>Anger Disorder</p>
</div>

<div className='conditions-icons'>
<ConditionsLogos Image={AnxietyDisorder} />
<p>Anxiety Disorder</p>
</div>

<div className='conditions-icons'>
<ConditionsLogos Image={BipolarDisorder} />
<p>Bipolor Disorder</p>
</div>

<div className='conditions-icons'>
<ConditionsLogos Image={Depression} />
<p>Depression</p>
</div>

<div className='conditions-icons'>
<ConditionsLogos Image={PTSD} />
<p>PTSD</p>
</div>

<div className='conditions-icons'>
<ConditionsLogos Image={SCHIZOAFFECTIVE } />
<p>Schizoaffective </p>
</div>

<div className='conditions-icons'>
<ConditionsLogos Image={SCHIZOPHRENIA } />
<p>Schizophrenia</p>
</div>

</div>
</Fade>

</div>


        </>
    )
}

export default Conditions

