import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TutorialBoard from './components/TutorialBoard';

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <TutorialBoard />
    </div>
  );
}

