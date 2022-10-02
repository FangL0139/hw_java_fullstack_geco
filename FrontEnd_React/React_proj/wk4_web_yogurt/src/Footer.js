import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div id="footer">
      <div>
        <div className="connect">
          {/* <a href="http://freewebsitetemplates.com/go/facebook/" class="facebook">facebook</a>   */}
          <NavLink to="http://freewebsitetemplates.com/go/facebook/" className="facebook">facebook</NavLink>
          {/* <a href="http://freewebsitetemplates.com/go/twitter/" class="twitter">twitter</a> */}
          <NavLink to="http://freewebsitetemplates.com/go/twitter/" className="twitter">twitter</NavLink>
          {/* <a href="http://freewebsitetemplates.com/go/googleplus/" class="googleplus">googleplus</a> */}
          <NavLink to="http://freewebsitetemplates.com/go/googleplus/" className="googleplus">googleplus</NavLink>
          {/* <a href="http://pinterest.com/fwtemplates/" class="pinterest">pinterest</a> */}
          <NavLink to="http://pinterest.com/fwtemplates/" className="pinterest">pinterest</NavLink>
        </div>
        <p>&copy; 2023 Freeeze. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer