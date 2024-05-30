import React from 'react'
import '../assets/Navbar.css'
import trollFace from '../images/trollFace.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'><img className='troll-img' src={trollFace} alt="" /> Meme Generator</span>
        <span>React Course - Project 3</span>
    </div>
  )
}

export default Navbar