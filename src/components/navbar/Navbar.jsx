import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import { RiMenu3Line , RiCloseLine, RiRadioButtonLine } from 'react-icons/ri'
import logo from '../../assets/GPT-3.svg';

const Menu = () => (
  <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#Whatgpt3'>What is GPT?</a></p>
        <p><a href='#Possibility'>Open AI</a></p>
        <p><a href='#Features'>Case Study</a></p>
        <p><a href='#Blog'>Library</a></p>
  </>
)
// BEM -> block__element-modifier
const Navbar = () => {
  const [ toggleMenu , setToggleMenu ] = useState(false) ; 
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
      <div className='gpt3__navbar-links_logo'>
      <img src={logo} alt='logo' />
      </div>
      <div className='gpt3__navbar-links_container'>
      <Menu />
      </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <a href='https://chat.openai.com/auth/login' target='_blank'><button type='button'>
          Sign up
        </button>
        </a>
      </div>
      {/*  navbar toggle menu menu_container */ }
      <div className='gpt3__navbar-menu'>
      {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
      }
      {toggleMenu && (
        <div className='gpt3__navbar-menu_container scale-up-top'>
          <div className='gpt3__navbar-menu_container-links '>
          <Menu />
          <div className='gpt3__navbar-menu_container-links-sign'>
          <p>Sign in</p>
          <button type='button'>
            Sign up
          </button>
          </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar