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
<div>
<div className='condition-icons-header container'>
    <h1>Types of Mental Health Disorders Do We Treat</h1>
    <p>Our compassionate staff utilizes established medical treatments to decrease withdrawal effects in an empathetic environment. In the meantime, you’ll receive behavioral health care from experienced counselors to boost your chances for an effective recovery.</p>
</div>


<div className='ConditionsLogosContainer'>

<Fade bottom>
<div className='conditions-icons'>
<ConditionsLogos Image={Depression} />
<p>Depression</p>
</div>
</Fade>

<Fade bottom>
<div className='conditions-icons'>
<ConditionsLogos Image={AnxietyDisorder} />
<p>Anxiety Disorder</p>
</div>
</Fade>

<Fade bottom>
<div className='conditions-icons'>
<ConditionsLogos Image={ADHD} />
<p>ADHD</p>
</div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={AngerDisorder} />
<p>Anger Disorder</p>
</div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={BipolarDisorder} />
<p>Bipolor Disorder</p>
</div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={PTSD} />
<p>PTSD</p>
</div>
</Fade>

<Fade bottom>
<div className='conditions-icons'>
<ConditionsLogos Image={SCHIZOAFFECTIVE } />
<p>Schizoaffective </p>
</div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={SCHIZOPHRENIA } />
<p>Schizophrenia</p>
</div>
</Fade>

</div>


<div className='condition-icons-header container'>
    <h1>Types of Substance Abuse Addiction Do We Treat</h1>
    <p>Our compassionate staff utilizes established medical treatments to decrease withdrawal effects in an empathetic environment. In the meantime, you’ll receive behavioral health care from experienced counselors to boost your chances for an effective recovery.</p>
</div>


<div className='ConditionsLogosContainer container'>

<Fade bottom>
<div className='conditions-icons'>
<ConditionsLogos Image={ADHD} />
<p>ALCOHOL</p>
</div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={AngerDisorder} />
<p>COCAINE</p>
</div>
</Fade>

<Fade bottom>
<div className='conditions-icons'>
<ConditionsLogos Image={AnxietyDisorder} />
<p>FENTANYL</p>
</div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={BipolarDisorder} />
<p>HEROIN</p>
</div>
</Fade>

<Fade bottom>
<div className='conditions-icons'>
<ConditionsLogos Image={Depression} />
<p>KRATOM</p>
</div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={PTSD} />
<p>MDMA</p>
</div>
</Fade>

<Fade bottom>
<div className='conditions-icons'>
<ConditionsLogos Image={SCHIZOAFFECTIVE } />
<p>METH </p>
</div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={SCHIZOPHRENIA } />
<p>OPIATE</p>
</div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={SCHIZOPHRENIA } />
<p>OPIOID</p>
</div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={SCHIZOPHRENIA } />
<p>OXYCODONE</p>
</div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={SCHIZOPHRENIA } />
<p>PRESCRIPTION</p>
</div>
</Fade>

<Fade top>
<div className='conditions-icons'>
<ConditionsLogos Image={SCHIZOPHRENIA } />
<p>XANAX</p>
</div>
</Fade>

</div>





</div>


</div>
























        </>
    )
}

export default Conditions

