import dotenv from 'dotenv';
import React from 'react';

import Routes from './routes';

import 'font-awesome/css/font-awesome.css';
import './styles.scss';

dotenv.config();

function App() {
  return (
    <Routes />
  );
}

export default App;
