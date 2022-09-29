import React, { useEffect, useState } from 'react'
import './App.css';

function UserList(props) {
  const [userInfo, setUserInfo] = useState();

  const showDetail = (pplObj) => {
    setUserInfo(pplObj);
  }

  useEffect(() => {
    setUserInfo();
  }, [props.userList])


  return (
    <div>
      <div className='api_res'>
        {(props.userList && props.userList.length <= 0) ? <h1>No User Found</h1> :
          props.userList && props.userList.map((pplObj, idx) => {
            return <div onClick={() => showDetail(pplObj)} className='res_box' key={idx}>{pplObj.first_name} <img className="avatar" src={pplObj.avatar} alt={pplObj.first_name}></img></div>
          })}
      </div>
      {/* <div> */}
      {userInfo ?
        <div>
          <div className='detail_box'>
            <div>ID: {userInfo.id}</div>
            <div>First Name: {userInfo.first_name}</div>
            <div>Last Name: {userInfo.last_name}</div>
            <div>Email: {userInfo.email}</div>
            <div>Image: <img className='avatar' src={userInfo.avatar}></img></div>
          </div>
        </div>
        : ""}
      {/* </div> */}
    </div>
  )
}

export default UserList