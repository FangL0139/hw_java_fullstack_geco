import React, { useState } from 'react'
import './App.css';
import Header from './Header';

const GetUser = () => {
  // const [pplList, setPplList] = useState();
  // const [pageNo, setPageNo] = useState();
  const [resObj, setResObj] = useState();
  const [userId, setUserId] = useState();

  const getApiRes = (userId) => {
    fetch("http://localhost:8080/user/" + userId)
      .then(res => res.json())
      .then(res2 => {
        setResObj(res2);//data is exist in the server response
        console.log(res2);
        // setDetail();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // const showDetail = (pplObj) => {
  //   setDetail(pplObj);
  // }
  return (
    <div>
      <Header navbar="getuser" />
      <h2>This is Get User</h2>
      <form>
        {/* <select onChange={(e) => { setPageNo(e.target.value); getApiRes(e.target.value) }}>
          <option value="1">Page 1</option>
          <option value="2">Page 2</option>
          <option value="3">Page 3</option>
        </select> */}
        <div>
          <label>User ID</label>
        </div>
        <div>
          <input value={userId} onChange={(e) => setUserId(e.target.value)} type="number" placeholder="Enter User Id" min="0" max="10"></input>
        </div>
        <button className='submit_btn' onClick={() => getApiRes(userId)} type="button">Get User detail</button>
      </form>
      <div>
        {
          (resObj && Object.keys(resObj)[0] == "response") ? <h1>{resObj["response"]}</h1> :
            resObj && Object.keys(resObj).map((key, idx) => {
              return <div key={idx}>
                <span className='Res-key'>{key}: </span>
                <span>{resObj[key]}</span></div>
            })
        }
      </div>
      {/* <div>
        {detail ?
          <div className='detail_box'>
            <div>ID: {detail.id}</div>
            <div>First Name: {detail.first_name}</div>
            <div>Last Name: {detail.last_name}</div>
            <div>Email: {detail.email}</div>
            <div>Image: <img className='avatar' src={detail.avatar}></img></div>
          </div>
          : ""}
      </div> */}
    </div>
  )
}

export default GetUser