import React from 'react'

const UserRes = (props) => {
  return (
    <div>{
      props.userObj && Object.keys(props.userObj).map((key, i) => (
        <p key={i}>
          <span className='Res-key'>{key}: </span>
          <span>{props.userObj[key]}</span>
        </p>
      ))
    }</div>
  )
}

export default UserRes