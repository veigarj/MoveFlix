import React from 'react'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

import './Navbar.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav id='navbar'>
        <h2>
          <Link to='/'><BiCameraMovie /> MovieFlix</Link>
        </h2>
          <form action="">
            <input type="text" placeholder='Busque um filme' />
            <button type='submit'><BiSearchAlt2/></button>
          </form>
      </nav>
    </div>
  )
}

export default Navbar