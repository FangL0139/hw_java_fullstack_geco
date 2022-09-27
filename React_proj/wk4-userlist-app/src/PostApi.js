import { useState } from 'react';
import './App.css';
import Header from './Header';

function PostApi() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [userObj, setUserObj] = useState();

  const btn_click = () => {
    // console.log(name,job);
    if (name == undefined || name == "") {
      alert("Please enter the name");
    } else if (job == undefined || job == "") {
      alert("Please enter the job");
    } else {
      post_Api("https://reqres.in/api/users");
    }
  }

  const post_Api = (url) => {
    let param = {
      "name": name,
      "job": job,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(param),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res2) => {
        setUserObj(res2);
        console.log(res2);
        // setName("");
        // setJob("");
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setJob("");
  }


  return (
    <div>
      <Header navbar="postapi" />
      <h2>This is Post API.</h2>
      <form className="PostForm">
        <div>
          <label>Name</label>
        </div>
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name"></input>
        </div>
        <div>
          <label>Job</label>
        </div>
        <div>
          <input value={job} onChange={(e) => setJob(e.target.value)} type="text" placeholder="Enter Job"></input>
        </div>
        <div className='Form-btn'>
          <button onClick={btn_click} type="button" value="submit">Submit</button>
        </div>
      </form>

      <div>{
        userObj && Object.keys(userObj).map((key, i) => (
          <p key={i}>
            <span className='Res-key'>{key}: </span>
            <span>{userObj[key]}</span>
          </p>
        ))
      }</div>
    </div>
  )
}

export default PostApi;