import { useState } from 'react';
import './App.css';
import Header from './Header';

function ConditionalArr(){
  let peopleList = [
    {"name":"Jack",'age':65},
    {"name":"John",'age':45},
    {"name":"Zoe",'age':55},
    {"name":"Mary",'age':20},
    {"name":"Dan",'age':5}
];

  return (
    <>
    <Header/>
    <h2>This is the Conditional Array</h2>
    <ul>
      {
        peopleList.map((peopleObj,idx)=>{
          return <li className={peopleObj.age>50?"heading_senior":"heading_junior"} key={idx}>Name: {peopleObj.name}------Age: {peopleObj.age}</li>
        }

        )
      }
    </ul>
    </>
  );
}

export default ConditionalArr;