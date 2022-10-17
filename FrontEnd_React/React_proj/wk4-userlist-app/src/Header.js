import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { httpGetWithHeader } from './HttpFetch';

function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();
  let token = localStorage.getItem("token");
  let userId = localStorage.getItem("userId");

  const checkLoggedIn = () => {
    setIsLoggedIn(!!token);
  }

  const logout_Api = () => {
    httpGetWithHeader("user/logout", userId, token)
      .then((res) => {
        if (!res.ok) {
          throw res;
        } else {
          return res.json();
        }
      })
      .then((res2) => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("full_response");
        navigate("/login");
      })
      .catch((err) => {
        err.json().then(e => { console.log(e); alert("Error in logging out"); })
      })

  }

  useEffect(checkLoggedIn, []);

  return (
    <ul className="Nav">
      <li><a className={props.navbar == "postapi" ? "active" : ""} href="postapi">PostAPI</a></li>
      <li><a className={props.navbar == "array" ? "active" : ""} href="array">Conditional Array</a></li>
      <li><a className={props.navbar == "getapi" ? "active" : ""} href="getapi">GetAPI</a></li>
      <li><a className={props.navbar == "newhome" ? "active" : ""} href="newhome">New Home</a></li>
      <li><a className={props.navbar == "newarray" ? "active" : ""} href="newarray">New Conditional Array</a></li>

      <li><a className={props.navbar == "getuser" ? "active" : ""} href="getuser">Get User</a></li>
      <li><a className={props.navbar == "register" ? "active" : ""} href="register">Register</a></li>
      {isLoggedIn ? <li><a className={props.navbar == "listuser" ? "active" : ""} href="listuser">List User</a></li> : null}
      {!isLoggedIn ? <li><a className={props.navbar == "login" ? "active" : ""} href="login">Login</a></li> : null}
      {isLoggedIn ? <li onClick={logout_Api}><a href="#logout">Log Out</a></li> : null}
    </ul>
  );
}

export default Header;