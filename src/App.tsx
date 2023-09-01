import React from 'react';
import './App.css';
import MainBoard from './components/mainBoard';
import MainMenu from './components/mainMenu';
function App() {
  return (
    <div className='App'>
      <h1>Tic-Tae-Toe</h1>
      <MainMenu/>
      <MainBoard/>
    </div>
  );
}

export default App;
