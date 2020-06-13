import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <p className="copyright">
      Design by Truxxu & <a href="https://html5up.net">HTML5 UP</a>.{' '}
      {new Date().getFullYear()}
    </p>
  </footer>
)

export default Footer
