import Header from "./Header";
import React from 'react';
import "./App.css"
import UserRes from "./UserRes";
import UserList from "./UserList";


class NewHome extends React.Component {
  constructor() {
    super();

    this.state = {
      "pageNo": "",
      "name": "",
      "job": "",
      "userObj": "",
      "userList": "",
      // "userInfo": ""
    }
  }

  btn_click = () => {
    // console.log(name,job);
    if (this.state.name == undefined || this.state.name == "") {
      alert("Please enter the name");
    } else if (this.state.job == undefined || this.state.job == "") {
      alert("Please enter the job");
    } else {
      this.post_Api("https://reqres.in/api/users");
    }
  }

  post_Api = (url) => {
    let param = {
      "name": this.state.name,
      "job": this.state.job,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(param),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res2) => {
        // setUserObj(res2);
        this.setState({ "userObj": res2 })
        console.log(res2);
      })
      .catch((err) => {
        console.log(err);
      });
    // setName("");
    this.setState({ "name": "" });
    this.setState({ "job": "" });
    // setJob("");
  }

  getApiRes = (pageNo) => {
    fetch("https://reqres.in/api/users?page=" + pageNo)
      .then(res => res.json())
      .then(res2 => {
        // setPplList(res2['data']);
        this.setState({ "userList": res2['data'] });
        console.log(res2);
        // setDetail();
      })
      .catch((err) => {
        console.log(err);
      });
    // this.setState({ "userInfo": "" });
  }

  // showDetail = (pplObj) => {
  //   // setDetail(pplObj);
  //   this.setState({ "userInfo": pplObj });
  // }


  render() {
    return (
      <div>
        <Header navbar="newhome" />
        <h1>Post API</h1>
        <form className="PostForm">
          <div>
            <label>Name</label>
          </div>
          <div>
            <input value={this.state.name} onChange={(e) => this.setState({ "name": e.target.value })} type="text" placeholder="Enter name"></input>
          </div>
          <div>
            <label>Job</label>
          </div>
          <div>
            <input value={this.state.job} onChange={(e) => this.setState({ "job": e.target.value })} type="text" placeholder="Enter Job"></input>
          </div>
          <div className='Form-btn'>
            <button onClick={this.btn_click} type="button" value="submit">Submit</button>
          </div>
        </form >
        <UserRes userObj={this.state.userObj}></UserRes>

        <div>
          <h2>Get API</h2>
          <div>
            <select onChange={(e) => {
              // setPageNo(e.target.value);
              this.setState({ "pageNo": e.target.value });
              this.getApiRes(e.target.value);
            }}>
              <option value="1">Page 1</option>
              <option value="2">Page 2</option>
              <option value="3">Page 3</option>
            </select>
            <button className='submit_btn' onClick={() => this.getApiRes(this.state.pageNo)}>
              Get API result
            </button>
          </div>
          <UserList userList={this.state.userList}></UserList>
        </div>


      </div >
    )
  }
}

export default NewHome;