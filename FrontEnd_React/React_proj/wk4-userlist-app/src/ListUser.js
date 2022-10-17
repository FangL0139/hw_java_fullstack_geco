import React, { Component, useEffect, useState } from 'react'
import './App.css';
import Select from 'react-select';
import Header from './Header';
import { httpGetWithHeader, httpPostWithHeader } from './HttpFetch';
import { Navigate, useNavigate } from 'react-router-dom';

const ListUser = () => {
  const [userList, setUserList] = useState();
  // const [pageNo, setPageNo] = useState();
  const [resObj, setResObj] = useState();
  // const [userId, setUserId] = useState();
  const [user, setUser] = useState();
  // const [options, setOptions] = useState();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  let navigate = useNavigate();
  let userId = localStorage.getItem("userId");
  let token = localStorage.getItem("token");


  const getAllUser = () => {
    // fetch("http://localhost:8080/user/listuser", {
    //   headers: {
    //     "content-type": "application/json",
    //     "token": token,
    //     "userId": userId
    //   }
    // })
    httpGetWithHeader("user/listuser", userId, token)
      .then((res) => {
        if (!res.ok) {
          throw res
        } else {
          return res.json();
        }
      })
      .then((res2) => {
        setId(res2[0].id);
        setUserList(res2);
        // console.log(res2);
      })
      .catch((err) => {
        err.json().then(e => { setResObj(e); console.log(e); })
      });
  }

  const checkToken = () => {
    return !!token;
  }

  useEffect(() => {
    if (checkToken()) {
      getAllUser();
    } else {
      navigate("/login");
    }

    // setUser(userList[0]);
    // createOptions(userList);
  }, []);

  const updateUser = () => {
    let param = {
      "id": id,
      "name": name,
      "password": password,
      "email": email,
      "address": address,
      "mobile": mobile,
    };

    // fetch("http://localhost:8080/user/update", {
    //   method: "POST",
    //   body: JSON.stringify(param),
    //   headers: {
    //     "Content-Type": "application/json",
    //     "token": token,
    //     "userId": userId
    //   },
    // })
    httpPostWithHeader("user/update", param, userId, token)
      .then((res) => {
        if (!res.ok) {
          throw res
        } else {
          return res.json();
          // .then((res2) => {
          //   setResObj(res2);
          //   getAllUser();
          //   // console.log(res2);
          // })
        }
      })
      .then((res2) => {
        setResObj(res2);
        getAllUser();
        // console.log(res2);
      })
      .catch((err) => {
        err.json().then(e => { setResObj(e); console.log(e); })
      });
    setName("");
    setPassword("");
    setEmail("");
    setAddress("");
    setMobile("");
  }

  const deleteUser = (id) => {
    // fetch("http://localhost:8080/user/delete/" + id, {
    //   headers: {
    //     "content-type": "application/json",
    //     "token": token,
    //     "userId": userId
    //   }
    // })
    httpGetWithHeader("user/delete/" + id, userId, token)
      .then((res) => {
        if (!res.ok) {
          throw res
        } else {
          return res.json();
          // .then((res2) => {
          //   setResObj(res2);
          //   // console.log(res2);
          // })
        }
      })
      .then((res2) => {
        setResObj(res2);
        getAllUser();
        // console.log(res2);
      })
      .catch((err) => {
        err.json().then(e => { setResObj(e); console.log(e); })
      });
    setName("");
    setPassword("");
    setEmail("");
    setAddress("");
    setMobile("");
  }



  // function createOptions(userList) {
  //   if (!!userList) {
  //     setOptions(userList);
  //   } else {
  //     setOptions(userList.map(({ id, name }) => ({ [id]: name })));
  //     console.log(options);
  //   }
  // }


  return (
    <div>
      <Header navbar="listuser" />
      <div>
        <select onChange={(e) => { setId(e.target.value); }}>
          <option>Select</option>
          {/* <Select value={options} options={options} defaultValue={options[0]} /> */}
          {(userList && userList.length <= 0) ? null :
            userList && userList.map((userObj, idx) => {
              return <option value={userObj.id} key={idx}>{userObj.id}--{userObj.name}</option>
            })
          }
        </select>
        <button className='submit_btn' onClick={() => updateUser()}>Update</button>
        <button className='submit_btn' onClick={() => deleteUser(id)}>Delete</button>
      </div>
      {/* <div className='api_res'>
        {(pplList && pplList.length <= 0) ? <h1>No User Found</h1> : pplList && pplList.map((pplObj, idx) => {
          return <div onClick={() => showDetail(pplObj)} className='res_box' key={idx}>{pplObj.first_name} <img className="avatar" src={pplObj.avatar} alt={pplObj.first_name}></img></div>
        })}
      </div> */}
      {/* <div>
        {user ?
          <div className='detail_box'>
            <div>ID: {user.id}</div>
            <div>Name: {user.name}</div>
            <div>Password: {user.password}</div>
            <div>Email: {user.email}</div>
            <div>Address: {user.address}</div>
          </div>
          : ""}

      </div> */}
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
        {/* <div className='Form-btn'>
          <button onClick={btn_click} type="button" value="submit">Submit</button>
        </div> */}
      </form>
      <div>{
        resObj && Object.keys(resObj).map((key, i) => (
          <p key={i}>
            <span className='Res-key'>{key}: </span>
            <span>{resObj[key]}</span>
          </p>
        ))
      }</div>
    </div >
  )
}

export default ListUser