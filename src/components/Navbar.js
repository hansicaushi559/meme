import React from 'react'
import troll from '../images/troll-face-logo.png'

function Navbar(){

    return(
        <header className='header'>
            <img src={troll} className='header-img'/>
            <h2 className='header-title'>Meme Generator</h2>
            <h4 className='header-project'>React Projects</h4>
        </header>
    )

}

export default Navbar