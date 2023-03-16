import React from 'react'
import Contact2 from '../contact/Contact2'

import TreatmentImage1 from '../../assets/treatment-1.jpg'
import TreatmentImage2 from '../../assets/treatment-2.jpg'

import Activities from '../../assets/activities.png'

import { FaRegStar } from 'react-icons/fa';

import './MethodSection.css'


const TreatmentSection = () => {
  return (
    <>

{/* SECTION 1 - OVERVIEW */}

    <div className='container treatment-section-overview'>
        <h1>Mental Health Treatment Above and Beyond the Norms</h1>
        <p>Here at Contra Costa Rehab, we firmly stand that without addressing our physical aspect, the mind cannot successfully recover. We go above and beyond the norms of mental health care, through a thorough and intentional treatment plan that is specific to every kind of individual that addresses not only the mental but also the physical inequalities in the body.
        <br/><br/>
        Methods used by Contra Costa Rehab are non-invasive, distinct, and successful in relieving acute symptoms that act as roadblocks to receiving the full therapy. Additionally, to get past more difficult progress barriers, these services are provided on a consistent and ongoing basis which is closely observed in coordination with our clinical team. 
        <br/><br/>
        The physical, mental, and spiritual imbalances have been found to be restored by its healing methods. Our design of mental health treatment is custom-fit to every individual. Compared to the programs which are commonly used, we are a firm believer that we can reach the full potential of our well-being by healing the body, mind and spirit. 
        </p>
    </div>


{/* SECTION 2 - TREATMENT PLAN */}

<div className='treatment-plan'>
        <div className='tile-header container'>
            <h1>Treatment Plan</h1>
            <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and re-assessment of treatment plan progress happen on a weekly basis through the weekly summary. In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director. </p>
        </div>


        <div className='treatment-section-tile'>
            <div className='tile-description'>
                <p>The treatment plan will be developed between client and counselor from key information gleaned from the assessment and intake process. This treatment plan will be goal and action oriented with objective and measurable criteria. Each treatment plan will have a statement of problem(s) with which the client identifies, statement of objectives to be reached that addressees each problem, action steps for client and counselor to ensure that objective will be completed.
                <br/><br/>
                Counselor and client will work together to compose a treatment plan with clear objectives and goals based on key areas intake assessment. It will include: challenges that the client may encounter during recovery process, clear methods of navigating obstacles in recovery, action steps to be taken by the program and/or client to overcome the challenges of recovery.
                </p>
            </div>

            <div className='tile-image'>
                <img src={TreatmentImage1} alt="Rehab Team" loading="lazy" />
            </div>
        </div>
</div>


{/* SECTION 3 */}

    <div className='treatment-section-tile wrap-reverse section3'>
        <div className='tile-image'>
            <img src={TreatmentImage2} alt="Rehab Team" loading="lazy" />
        </div>
        
        <div className='tile-description'>
            <p>
            Some areas to be examined may be personal relationships, work, anger management, lack of power, financial burdens, separation from children, past trauma as it relates to present, school, etc.
            <ul> <br/>
                <li>
                <FaRegStar className='star'/> Counselor and client will set clear and tangible goals regarding above mentioned obstacles.
                </li><br/>
                <li>
                <FaRegStar className='star'/> Counselor and client will brainstorm potential hurdles as client attempts to accomplish goals.
                </li><br/>
                <li>
                <FaRegStar className='star'/> Counselor and client discuss systems for working through hurdles. Counselor and client will — upon following weekly session — discuss successes and setbacks for set goals.
                </li>
            </ul>
            </p>
        </div>
    </div>


{/* SECTION 4 - RECREATIONS */}


    <div className='treatment-section-activities'>
        <div className='treatment-left'>
            <div className='tile-header'>
                <h1>Recreations</h1>
            </div>
            <p>
                As mentioned above, the weekly summary reflective of the session between client and counselor/therapist will measure each treatment plan goal on a weekly basis. The client will also initial the weekly summary as this is a review of the treatment plan goals and objectives. Furthermore, clients may have new issues come up during treatment that were not identified at the time of assessment. Drug and alcohol counselors/therapists will develop new treatment plan goals as needed using this protocol whenever necessary.
            </p>
        </div>

        <div className='treatment-right'>
            <img src={Activities} alt='activities'/>
        </div>
    </div>




{/* SECTION 5 - GROUP AND INDIVIDUAL THERAPY */}


    <div className='container treatment-section'>
      <h1>Group and Individual Therapy</h1>
      
      <ul>
                <li>
                <h3><FaRegStar className='star'/> Cognitive Behavioral Therapy.</h3><br/>
                <p>This method helps you develop your way of thinking towards difficult situation and handle your emotional challenges in a lightly manner.</p>
                </li><br/>
                <li>
                <h3><FaRegStar className='star'/> Family Therapy.</h3><br/>
                <p>This method focuses to help manage conflicts and struggles within family members. Our goal is to help a family find a healthier ways of resolving a difficult situations. </p>
                </li><br/>
                <li>
                <h3><FaRegStar className='star'/> Art Therapy.</h3><br/>
                <p>This method is an effective treatment to individuals experiencing mental health struggles with the use of arts. With this method, the patients can express their feelings and emotions in a creative way in a one-on-one or small-group settings. </p>
                </li><br/>
                <li>
                <h3><FaRegStar className='star'/> Hypnotherapy.</h3><br/>
                <p>This method involves exercises that allows the patient to enter into an deeply and calm state, physically and mentally, guided by a trained hypnotherapist. This will help the patient go back to past his/her past memories and explore the emotional struggles which is hidden from the concious mind. </p>
                </li><br/>
            </ul>
      </div>
      <Contact2 />

    </>
  )
}

export default TreatmentSection