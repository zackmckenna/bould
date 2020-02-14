import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
      </header>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginTop: '12vh', marginBottom: '0', fontSize: '10vw'}}><strong>Bould.</strong></h1>
        <p>a minimalist climb-tracking app</p>
      </div>
      <div style={{ paddingTop: '1rem', justifyContent: 'center', display: 'flex' }}>
        <span style={{ backgroundColor: '#26547C'}} class='dot'></span>
        <span style={{ backgroundColor: '#EF476F' }} class='dot'></span>
        <span style={{ backgroundColor:'#FFD166' }} class='dot'></span>
        <span style={{ backgroundColor:'#06D6A0' }} class='dot'></span>
        <span style={{ backgroundColor:'#59c75d' }} class='dot'></span>
      </div>
    </div>
  );
}

export default App;
