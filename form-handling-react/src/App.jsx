import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import RegistrationForm from './components/RegistrationForm';
import React from 'react';
import FormikForm from './components/FormikForm';

const App = () => {
  return (
    <div className="App">
      <h1>Registration Form with Formik</h1>
      <FormikForm />
    </div>
  );
};

export default App;
