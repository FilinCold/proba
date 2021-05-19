import React, {useEffect, useState} from "react";
import {Link, NavLink, useHistory} from "react-router-dom";

import {getUser} from "../../services";

import imgMan from '../../man.jpg'

const User = (props) => {
  const history = useHistory();
  const [check, setCheck] = useState(false)
  const [user, setUser] = useState({
    id: 0,
    img: 'https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg',
    firstName: '',
    // lastName: 'Doe',
    aboutme: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, earum libero mollitia officia pariatur quas.',
  })
  useEffect(() => {
    getUser()
      .then(data => setUser({
        ...user,
        firstName: data.map(u => {
          if (u.email === localStorage.getItem('email')) {
            return u.name
          }
        })
      }));
  }, []);


  return (
    <div className='profile__user'>
      <div className="user">
        <div className='container__user'>
          <div className='container__user_img-logout'>
            <div className="user__img">
              <img src={imgMan} alt=""/>
            </div>
            <div className="user__logout-button">
              <button onClick={props.changeStateAuthorization}>Logout</button>
            </div>
          </div>
          <div className="about-user">
            <div className="user__fName-lName">
              <span className='fName'>{user.firstName}</span>
              <span className="lName">{user.lastName}</span>
            </div>
            <div className="user__aboutMe">{user.aboutme}</div>
            <div className="user__links">
              <ul className='list__links'>
                <li>
                  <NavLink id='allarticles' to='/posts/'>
                    All articles
                  </NavLink>
                </li>
                <li>
                  <NavLink id='myarticles' to='/myarticles/'>My
                    articles</NavLink>
                </li>
                <li>
                  <NavLink id='addarticles' to='/addarticles/'>Add
                    article</NavLink>
                </li>
                <li>
                  <NavLink id='profile' to='/profile/'>
                    Profile
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;