import React, { useState } from 'react'
import './App.css';
import Header from './Header';

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [resObj, setResObj] = useState();

  const btn_click = () => {
    // console.log(userName,password);
    if (userName == undefined || userName == "") {
      alert("Please enter the UserName");
    } else if (password == undefined || password == "") {
      alert("Please enter the password");
    } else {
      post_Api("http://localhost:8080/login");
    }
  }

  const post_Api = (url) => {
    let param = {
      "userName": userName,
      "password": password,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(param),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res2) => {
        setResObj(res2);
        console.log(res2);
        // setUserName("");
        // setPassword("");
      })
      .catch((err) => {
        console.log(err);
      });
    setUserName("");
    setPassword("");
  }


  return (
    <div>
      <Header navbar="login" />
      <h2>This is Login.</h2>
      <form className="PostForm">
        <div>
          <label>UserName</label>
        </div>
        <div>
          <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter UserName"></input>
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