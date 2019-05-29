import dotenv from 'dotenv';
import React from 'react';

import Characters from './components/characters';

import 'font-awesome/css/font-awesome.css';
import './styles.scss';

dotenv.config();

function App() {
  return (
    <Characters title="Jhon Snow" description="King" />
  );
}

export default App;
