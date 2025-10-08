import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__inner ">
          <div className="">
            <Link to='/' >
              Me
              </Link>
          </div>
          <div className="">
          <Link to='/about'>
              About 
              </Link>
          </div>
          <div className="">
          <Link to='/skills'>
             Skills
              </Link>
          </div>
          <div className="">
          <Link to='/project'>
              Projects
              </Link>
          </div>
          <div className="">
          <Link to='/contact'>
              Contact
              </Link>
          </div>
        </div>
      </div>
    </>)
}

export default Header


