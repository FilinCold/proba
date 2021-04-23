import React from "react";

import imgMan from '../../man.jpg'
import {NavLink} from "react-router-dom";


const User = (props) => {
  console.log()
  return (
    <div className='container__user'>
      <div className="user__img">
        <img src={imgMan} alt=""/>
      </div>
      <div className="user__fName-lName">
        <span className='fName'>{props.user.firstName}</span>
        <span className="lName">{props.user.lastName}</span>
      </div>
      <div className="user__aboutMe">{props.user.aboutMe}</div>
      <div className="user__links">
        <ul className='list__links'>
          <li>
            <NavLink to='allarticles'>All articles</NavLink>
          </li>

          <li>
            <NavLink to='myarticles'>My articles</NavLink>
          </li>

          <li>
            <NavLink to='addarticles'>Add article</NavLink>
          </li>

          <li>
            <NavLink to='profile'>Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default User;