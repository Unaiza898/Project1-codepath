import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Calendar from './components/Calendar'
import Cards from './components/cards'
import seychelles from '../src/assets/seychelles.jpg'
import leka from '../src/assets/leka.jpg'
import bora from '../src/assets/bora.jpg'
import europe from  '../src/assets/europe.jpg'
import china from '../src/assets/china.jpg'
import norway from '../src/assets/norway.jpg'
import paris from '../src/assets/paris.jpg'
function App() {

  return (
    <div className="App">
            <Navbar/>
        
<q className='quote'>	 Our team will take you to the moon and back for a fraction of the price</q>
<div class="flex-container">
<Cards name = "norway" img = {leka}/>
<Cards name = "bora bora" img = {bora}/>
<Cards name = "Minneapolis"img = {europe}/>
</div>

<div class="flex-container">
<Cards name = "Great Wall of China" img = {china}/>
<Cards name = "norway" img = {norway}/>
<Cards name = "Minneapolis"img = {europe}/>
</div>
<div class="flex-container">
<Cards name = "Paris" img = {paris}/>
<Cards name = "bora bora" img = {bora}/>
<Cards name = "Minneapolis"img = {europe}/>
</div>
<div class="flex-container">
<Cards name = "seychelles" img = {seychelles}/>
<Cards name = "bora bora" img = {bora}/>
<Cards name = "Minneapolis"img = {europe}/>
</div>
<div>

</div>


    </div>

  )
}

export default App
