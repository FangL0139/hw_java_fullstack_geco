import React, { useState } from 'react'
import './App.css';
import Header from './Header';

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [resObj, setResObj] = useState();

  const btn_click = () => {
    // console.log(name,password);
    if (name == undefined || name == "") {
      alert("Please enter the name");
    } else if (password == undefined || password == "") {
      alert("Please enter the password");
    } else if (email == undefined || email == "") {
      alert("Please enter the email");
    } else if (address == undefined || address == "") {
      alert("Please enter the address");
    } else if (mobile == undefined || mobile == "") {
      alert("Please enter the mobile");
    } else {
      post_Api("http://localhost:8080/user/register");
    }
  }

  const post_Api = (url) => {
    let param = {
      "name": name,
      "password": password,
      "email": email,
      "address": address,
      "mobile": mobile,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(param),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw res
        } else {
          res.json()
            .then((res2) => {
              setResObj(res2);
              console.log(res2);
              // setName("");
              // setPassword("");
            })
        }
      })
      .catch((err) => {
        err.json().then(e => { setResObj(e); console.log(e); })
        // console.log(err);
        // alert("error");
      });
    setName("");
    setPassword("");
    setEmail("");
    setAddress("");
    setMobile("");
  }

  return (
    <div>
      <Header navbar="register" />
      <h2>This is Register.</h2>
      <form className="PostForm">
        <div>
          <label>Name</label>
        </div>
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name"></input>
        </div>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password"></input>
        </div>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email"></input>
        </div>
        <div>
          <label>Address</label>
        </div>
        <div>
          <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Enter address"></input>
        </div>
        <div>
          <label>Mobile</label>
        </div>
        <div>
          <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="text" placeholder="Enter mobile"></input>
        </div>
        <div className='Form-btn'>
          <button onClick={btn_click} type="button" value="submit">Submit</button>
        </div>
      </form>

      <div>{
        resObj && Object.keys(resObj).map((key, i) => (
          <p key={i}>
            <span className='Res-key'>{key}: </span>
            <span>{resObj[key]}</span>
          </p>
        ))
      }</div>
    </div>
  )
}

export default Register