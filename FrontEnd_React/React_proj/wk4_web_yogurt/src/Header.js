import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <div id="header">
      <div>
        {/* <a href="index.html" className="logo"><img src="images/logo.png" alt=""></img></a> */}
        <NavLink to="/home" className="logo"><img src="images/logo.png" alt=""></img></NavLink>
        <ul id="navigation">
          <li className={props.menuname == "home" ? "selected" : ""}>
            {/* <a href="index.html">Home</a> */}
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className={props.menuname == "about" ? "menu selected" : "menu"}>
            {/* <a href="about.html">About</a> */}
            <NavLink to="/about">About</NavLink>
            <ul id={props.menuname == "product" ? "selected" : ""} className="primary">
              <li>
                {/* <a href="product.html">Product</a> */}
                <NavLink to="/product">Product</NavLink>
              </li>
            </ul>
          </li>
          <li className={props.menuname == "blog" ? "menu selected" : "menu"}>
            {/* <a href="blog.html">Blog</a> */}
            <NavLink to="/blog">Blog</NavLink>
            <ul id={props.menuname == "singlepost" ? "selected" : ""} className="secondary">
              <li>
                {/* <a href="singlepost.html">Single post</a> */}
                <NavLink to="/singlepost">Single post</NavLink>
              </li>
            </ul>
          </li>
          <li className={props.menuname == "contact" ? "selected" : ""}>
            {/* <a href="contact.html">Contact</a> */}
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header