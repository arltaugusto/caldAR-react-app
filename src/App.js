import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './Components/MainLayout/MainLayout';

const App = () => (
    <Router>
      <MainLayout />
    </Router>
);

export default App;
