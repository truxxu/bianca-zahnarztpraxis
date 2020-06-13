import React from 'react'

import logo from '../assets/images/logo-sm.png'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" style={{ width: 150 }} />
    </span>
    <h1>Bianca Weisz</h1>
    <h2>Praxis für Zahnmedizin</h2>
  </header>
)

export default Header
