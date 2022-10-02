import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Home = () => {
  return (
    <div id='page'>
      <Header menuname="home" />
      <div id="body" className="home">
        <div className="header">
          <img src="images/bg-home.jpg" alt=""></img>
          <div>
            {/* <a href="product.html">Freeze Delight</a> */}
            <NavLink to="/product">Freeze Delight</NavLink>
          </div>
        </div>
        <div className="body">
          <div>
            <div>
              <h1>NEW PRODUCT</h1>
              <h2>The Twist of Healthy Yogurt</h2>
              <p>This website template has been designed by freewebsitetemplates.com for you, for free. You can replace all this text with your own text.</p>
            </div>
            <img src="images/yogurt.jpg" alt=""></img>
          </div>
        </div>
        <div className="footer">
          <div>
            <ul>
              <li>
                {/* <a href="product.html" className="product"></a> */}
                <NavLink to="/product" className="product"></NavLink>
                <h1>PRODUCTS</h1>
              </li>
              <li>
                {/* <a href="about.html" className="about"></a> */}
                <NavLink to="/about" className="about"></NavLink>
                <h1>OUR STORY</h1>
              </li>
              <li>
                {/* <a href="product.html" className="flavor"></a> */}
                <NavLink to="/product" className="flavor"></NavLink>
                <h1>FLAVORS</h1>
              </li>
              <li>
                {/* <a href="contact.html" className="contact"></a> */}
                <NavLink to="/contact" className="contact"></NavLink>
                <h1>OUR LOCATION</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home