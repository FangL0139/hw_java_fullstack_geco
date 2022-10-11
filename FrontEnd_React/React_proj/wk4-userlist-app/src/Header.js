import { useEffect, useState } from 'react';
import './App.css';

function Header(props) {
  const [isExist, setIsExist] = useState(false);

  const check_Acct = () => {
    if (localStorage.getItem("token") != undefined && localStorage.getItem("token") != "") {
      setIsExist(true);
    } else {
      setIsExist(false);
    }
  }

  useEffect(check_Acct, []);


  return (
    <ul className="Nav">
      <li><a className={props.navbar == "postapi" ? "active" : ""} href="postapi">PostAPI</a></li>
      <li><a className={props.navbar == "array" ? "active" : ""} href="array">Conditional Array</a></li>
      <li><a className={props.navbar == "getapi" ? "active" : ""} href="getapi">GetAPI</a></li>
      <li><a className={props.navbar == "newhome" ? "active" : ""} href="newhome">New Home</a></li>
      <li><a className={props.navbar == "newarray" ? "active" : ""} href="newarray">New Conditional Array</a></li>
      <li><a className={props.navbar == "login" ? "active" : ""} href="login">Login</a></li>
      <li><a className={props.navbar == "getuser" ? "active" : ""} href="getuser">Get User</a></li>
      {isExist ? <li><a href="#logout">Log Out</a></li> : null}
    </ul>
  );
}

export default Header;