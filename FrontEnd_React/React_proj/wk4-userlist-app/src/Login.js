import React, { useState } from 'react'
import './App.css';
import Header from './Header';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resObj, setResObj] = useState();

  const btn_click = () => {
    // console.log(userName,password);
    if (email == undefined || email == "") {
      alert("Please enter the email");
    } else if (password == undefined || password == "") {
      alert("Please enter the password");
    } else {
      post_Api("http://localhost:8080/user/login");
    }
  }

  const post_Api = (url) => {
    let param = {
      "email": email,
      "password": password,
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
              // console.log(res2);
              // setUserName("");
              // setPassword("");
            })
        }
      })
      .catch((err) => {
        err.json().then(e => { setResObj(e); console.log(e); })
        // console.log(err);
        // alert("error");
      });
    setEmail("");
    setPassword("");
  }


  return (
    <div>
      <Header navbar="login" />
      <h2>This is Login.</h2>
      <form className="PostForm">
        <div>
          <label>Email</label>
        </div>
        <div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter UserName"></input>
        </div>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password"></input>
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

export default Login;