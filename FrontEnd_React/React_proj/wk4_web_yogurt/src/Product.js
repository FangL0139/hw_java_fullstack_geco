import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Product = () => {
  return (
    <div id="page">
      <Header menuname="product" />
      <div id="body">
        <div className="header">
          <div>
            <h1>Products</h1>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <h1>All Time classNameic</h1>
              <p>This website template has been designed by freewebsitetemplates.com for you, for free.</p>
            </li>
            <li>
              <img src="images/kiwi.jpg" alt=""></img>
              <h2>Kiwi</h2>
            </li>
            <li>
              <img src="images/mango.jpg" alt=""></img>
              <h2>Mango</h2>
            </li>
            <li>
              <img src="images/cantaloupe.jpg" alt=""></img>
              <h2>Cantaloupe</h2>
            </li>
          </ul>
          <ul>
            <li>
              <h1>Berry Special</h1>
              <p>This website template has been designed by freewebsitetemplates.com for you, for free.</p>
            </li>
            <li>
              <img src="images/blackberry.jpg" alt=""></img>
              <h2>blackberry</h2>
            </li>
            <li>
              <img src="images/strawberry.jpg" alt=""></img>
              <h2>Strawberry</h2>
            </li>
            <li>
              <img src="images/blueberry.jpg" alt=""></img>
              <h2>BLUEBERRY</h2>
            </li>
          </ul>
          <ul>
            <li>
              <h1>Fruit Blast</h1>
              <p>This website template has been designed by freewebsitetemplates.com for you, for free.</p>
            </li>
            <li>
              <img src="images/grapes.jpg" alt=""></img>
              <h2>Grapes</h2>
            </li>
            <li>
              <img src="images/green-apple.jpg" alt=""></img>
              <h2>Green Apple</h2>
            </li>
            <li>
              <img src="images/pineapple.jpg" alt=""></img>
              <h2>Pineapple</h2>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product