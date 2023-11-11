import React, { useState } from 'react'
import { burgerMenu, logo } from '../../Utilities/images'
import './Navbar.css'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
        document.body.classList.toggle('lock-scroll')
    }
    
  return (
    <>
    <nav className='py-4 center'>
        <img src={logo} />
        <ul className={`d-flex links ${isMenuOpen ? 'linksShow' : ''}`}>
            {['Home','New','Popular','Trending','Categories'].map((category,i) => <li key={i}className='px-3 py-1'>{category}</li>)}
        </ul>
        <img src={burgerMenu} alt="menu" className='burgerMenu' onClick={handleMenuOpen} />
    </nav>
    </>
  )
}
