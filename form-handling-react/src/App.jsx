import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FormikForm from './components/FormikForm';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <div className="App">
      <h1>Registration Form with Formik</h1>
      <FormikForm />
      <RegistrationForm />

    </div>
  );
};

export default App;
