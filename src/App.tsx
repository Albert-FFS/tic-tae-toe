import React, { useState } from 'react';
import './App.css';
import MainBoard from './components/mainBoard';
import MainMenu from './components/mainMenu';
function App() {
  const [starGame, setStarGame] = useState<boolean>(false)
  
  return (
    <div className='App'>
      <h1>Tic-Tae-Toe</h1>
      {starGame?<MainBoard/>:<MainMenu/>}
    </div>
  );
}

export default App;
