import React from 'react'
import style from './style.module.css'
const Index = () => {
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Index
