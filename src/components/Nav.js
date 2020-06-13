import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['first', 'second', 'third']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="first">
          <a href="#">SARS CoV-2</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="second">
          <a href="#">Kontakt</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="third">
          <a href="#">Anfahrt</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
