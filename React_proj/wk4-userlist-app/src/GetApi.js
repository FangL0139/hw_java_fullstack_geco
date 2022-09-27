import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import './App.css';
import Header from './Header';

function GetApi() {
  const [pplList, setPplList] = useState();
  const [pageNo, setPageNo] = useState();
  const [detail, setDetail] = useState();

  const getApiRes = (pageNo) => {
    fetch("https://reqres.in/api/users?page=" + pageNo)
      .then(res => res.json())
      .then(res2 => {
        setPplList(res2['data']);//data is exist in the server response
        console.log(res2);
        setDetail();
      })
  }

  const showDetail = (pplObj) => {
    setDetail(pplObj);
  }

  return (
    <div>
      <Header navbar="getapi" />
      <div>
        <select onChange={(e) => { setPageNo(e.target.value); getApiRes(e.target.value) }}>
          <option value="1">Page 1</option>
          <option value="2">Page 2</option>
          <option value="3">Page 3</option>
        </select>
        <button className='submit_btn' onClick={() => getApiRes(pageNo)}>Get API result</button>
      </div>
      <div className='api_res'>
        {(pplList && pplList.length <= 0) ? <h1>No User Found</h1> : pplList && pplList.map((pplObj, idx) => {
          return <div onClick={() => showDetail(pplObj)} className='res_box' key={idx}>{pplObj.first_name} <img className="avatar" src={pplObj.avatar} alt={pplObj.first_name}></img></div>
        })}
      </div>
      <div>
        {detail ?
          <div className='detail_box'>
            <div>ID: {detail.id}</div>
            <div>First Name: {detail.first_name}</div>
            <div>Last Name: {detail.last_name}</div>
            <div>Email: {detail.email}</div>
            <div>Image: <img className='avatar' src={detail.avatar}></img></div>
          </div>
          : ""}
      </div>
    </div>
  );
}

export default GetApi;