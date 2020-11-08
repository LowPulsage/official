import React from 'react'
import './header.scss'
import logo from '../../img/logo-wtt-w.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="Header__wrapper">
      <div className="Header__block">
        <Link to="/">
          <img src={logo} alt="logo" />
          <span>Try to be Happy</span>
        </Link>
      </div>
      <div className="Header__links">
        <a href="/#">About</a>
        <a href="/#">Expertise</a>
        <a href="/#">Work</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="Header__search">
        <a href="/#">Search</a> <a href="/#">Search</a>
      </div>
    </div>
  )
}
