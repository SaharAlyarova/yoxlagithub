import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Navbar = () => {
    const [size, setSize] = useState("10rem")
    const [color, setColor] = useState("transparent")
    const [textColor, setTextColor] = useState("white")
    const [flex, setFlex] = useState("flex")
    const [align, setAlign] = useState("align")

    const listenScrollEvents = () => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setColor("transparent")
                setTextColor("white")
                setFlex("flex")
                setAlign("align")
            } else {
                setColor("white")
            }
    })};
    useEffect(() =>{
        listenScrollEvents()
    })
  return (
    <div className='container'>
        <nav className='container'>
            <div className='navbar__links'>
                <div className='navbar__links__logo'>
                    <Link className='link1' to='/'>OneSchool</Link>
                </div>
                <div className='navbar__links__routers'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/add'>Add Page</Link>
                    <Link className='link' to='/programs'>Programs</Link>
                    <Link className='link' to='/teach'>Teches</Link>
                </div>
                <div className='navbar__links__button'>
                    <button>Contact Us</button>
                </div>
            </div>
    
            <div className='header__text'>
                <div className='header__text__left'>
                    <div className='header__text__left__div'>
                    <h1>Learn From The Expert</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                    <button>Admission Now</button>
                    </div>
                </div>
                <div className='header__text__right'>
                    <div className='header__text__right__div'>
                        <p>Sign Up</p>
                        <div className='form'>
                                <input type="text" placeholder='Email'/>
                                <input type="text" placeholder='Password'/>
                                <input type="password" placeholder="Re-type Password"/>
                        </div>
                        <button type='submit'>Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar