import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'

const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");

  return (
    <div id="page">
      <Header menuname="contact" />
      <div id="body" className="contact">
        <div className="header">
          <div>
            <h1>Contact</h1>
          </div>
        </div>
        <div className="body">
          <div>
            <div>
              <img src="images/check-in.png" alt=""></img>
              <h1>UNIT 0123 , ABC BUILDING, BUSSINESS PARK</h1>
              <p>If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="contact">
            <h1>INQUIRY FORM</h1>
            <form action="/home">
              <input type="text" name="Name" Value="Name" onBlur={(e) => e.target.value = !e.target.value ? "Name" : e.target.value} onFocus={(e) => e.target.select()} onClick={(e) => e.target.value = ""}></input>
              <input type="text" name="Email" Value="Email" onBlur={(e) => e.target.value = !e.target.value ? "Email" : e.target.value} onFocus={(e) => e.target.select()} onClick={(e) => e.target.value = ""}></input>
              <input type="text" name="Subject" Value="Subject" onBlur={(e) => e.target.value = !e.target.value ? "Subject" : e.target.value} onFocus={(e) => e.target.select()} onClick={(e) => e.target.value = ""}></input>
              <textarea name="meassage" cols="50" rows="7">Share your thoughts</textarea>
              <input type="submit" value="Send" id="submit"></input>
            </form>
          </div>
          <div className="section">
            <h1>WE’D LOVE TO HEAR FROM YOU.</h1>
            <p>If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Contact