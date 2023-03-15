import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MethodPage from './routes/MethodPage'
import MissionPage from './routes/MissionPage'
import AboutPage from './routes/AboutPage'
import InsurancePage from './routes/InsurancePage'
import ContactPage from './routes/ContactPage'

import MH from './routes/MH';
import MHPhp from './routes/MH-PHP';
import MHIop from './routes/MH-IOP';
import MHOp from './routes/MH-OP';

import Jobs from './routes/JOBS';

import AcuteStressDisorder from './routes/AcuteStressDisorder';
import ADHD from './routes/ADHD';
import AngerDisorder from './routes/AngerDisorder';
import Anxiety from './routes/Anxiety';
import BipolarDisorder from './routes/BipolarDisorder';
import Depression from './routes/DepressionPage';
import PanicDisorder from './routes/PanicDisorderPage';
import PTSD from './routes/PTSDPage';
import Schizoaffective from './routes/SchizoaffectivePage';
import Schizophrenia from './routes/SchizophreniaPage';






ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />

      <Route exact path='/mental-health' element={<MH />} />
      <Route exact path='/mental-health-php' element={<MHPhp />} />
      <Route exact path='/mental-health-iop' element={<MHIop />} />
      <Route exact path='/mental-health-op' element={<MHOp />} />

      <Route exact path='/jobs' element={<Jobs />} />

      <Route exact path='/acute-stress-disorder' element={<AcuteStressDisorder />} />
      <Route exact path='/adhd' element={<ADHD />} />
      <Route exact path='/anger-disorder' element={<AngerDisorder />} />
      <Route exact path='/anxiety' element={<Anxiety />} />
      <Route exact path='/bipolar-disorder' element={<BipolarDisorder />} />
      <Route exact path='/depression' element={<Depression />} />
      <Route exact path='/panic-disorder' element={<PanicDisorder />} />
      <Route exact path='/ptsd' element={<PTSD />} />
      <Route exact path='/schizoaffective' element={<Schizoaffective />} />
      <Route exact path='/schizophrenia' element={<Schizophrenia />} />

      <Route exact path='/method' element={<MethodPage />} />
      <Route exact path='/mission' element={<MissionPage />} />
      <Route exact path='/about-us' element={<AboutPage />} />
      <Route exact path='/insurance' element={<InsurancePage />} />
      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

