import React from 'react';
import leka from '../assets/leka.jpg'
import logo from '../assets/logo.png'
const Navbar = () => {

    return (
        <div className='App'>
    
        <div className='bar'>
           <h3>Travel App</h3>

           <div className='btn'>
          <button className='first'> Login </button>
          <button > Sign up </button>
           </div>
         </div>
          <img src={leka} className = "img-nav"></img>
                  
        </div>
    )
}

export default Navbar;