import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'

const Blog = () => {
  const [blogList, setBlogList] = useState([
    { "img": "images/new-chills.png", "title": "NEW CHILLS FOR SUMMER", "sub-title": "By Admin on November 28, 2023", "content": "You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template." },
    { "img": "images/berries.png", "title": "BERRIES ON THE GROVE", "sub-title": "By Admin on November 28, 2023", "content": "You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template." },
  ]);


  return (
    <div id="page">
      <Header menuname="blog" />
      <div id="body">
        <div className="header">
          <div>
            <h1>Blog</h1>
          </div>
        </div>
        <div className="blog">
          <div className="featured">
            <ul>
              {blogList.map((blogObj, idx) => {
                return <li>
                  <img src={blogObj.img} alt=""></img>
                  <div>
                    <h1>{blogObj.title}</h1>
                    <span>{blogObj['sub-title']}</span>
                    <p>{blogObj.content}</p>
                    {/* <a href="singlepost.html" className="more">Read More</a> */}
                    <NavLink className="more" to="/singlepost">Read More</NavLink>
                  </div>
                </li>
              }
              )}

            </ul>
            {/* <a href="blog.html" className="load">Load More</a> */}
            <NavLink className="load" to="/blog">Load More</NavLink>
          </div>
          <div className="sidebar">
            <h1>Recent Posts</h1>
            <img src="images/on-diet.png" alt=""></img>
            <h2>ON THE DIET</h2>
            <span>By Admin on November 28, 2023</span>
            <p>You can replace all this text with your own text. You can remove any link to our website from this website template.</p>
            {/* <a href="singlepost.html" className="more">Read More</a> */}
            <NavLink className="more" to="/singlepost">Read More</NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog