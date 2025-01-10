import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Characters from './characters/Characters'


function App() {
  

  return (
    <div>
      <h1>Harry Potter Application</h1>
        <div className='buttons'>
          <a href="#"><button type='button' className='btn btn-outline-info'>Characters</button></a>
          <a href="#"><button type='button' className='btn btn-outline-info'>Spells</button></a>
        </div>
        <div>
          <Characters />
        </div>
    </div>
  );
}

export default App
