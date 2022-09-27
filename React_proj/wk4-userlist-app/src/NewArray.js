import React, { Component } from 'react'
import Header from './Header';

export default class NewArray extends Component {


  constructor() {
    super();

    this.state = {
      "peopleList": [
        { "name": "James", 'age': 15 },
        { "name": "Lebron", 'age': 55 },
        { "name": "Doncic", 'age': 25 },
        { "name": "Jordan", 'age': 60 },
        { "name": "Lee", 'age': 5 }
      ]
    }
  }

  render() {
    return (
      <div>
        <Header navbar="newarray" />
        <h2>This is the NEW Conditional Array</h2>
        <ul>
          {
            this.state.peopleList.map((peopleObj, idx) => {
              return <li className={peopleObj.age > 50 ? "heading_senior" : "heading_junior"} key={idx}>Name: {peopleObj.name}------Age: {peopleObj.age}</li>
            }

            )
          }
        </ul>
      </div>
    )
  }
}
