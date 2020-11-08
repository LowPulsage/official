import React from 'react'
import './header.scss'

export const Header = () => {
  return (
    <div className="Header__wrapper">
      <div className="Header__block">
        <span>icon</span>
        <span>Try to be Happy</span>
      </div>
      <div className="Header__block">
        <a href="/#">About</a>
        <a href="/#">Expertise</a>
        <a href="/#">Work</a>
        <a href="/#">Contact</a>
      </div>
      <div className="Header__block">
        <a href="/#">Search</a>
        <a href="/#">Search</a>
      </div>
    </div>
  )
}
