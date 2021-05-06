import React, {useEffect, useState} from "react";

import imgMan from '../../man.jpg'
import {Link, NavLink, useHistory} from "react-router-dom";


const User = (props) => {
  const history = useHistory();


  const [check, setCheck] = useState(false)
  const [user, setUser] = useState({
    id: 0,
    img: 'https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg',
    firstName: 'John',
    lastName: 'Doe',
    aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, earum libero mollitia officia pariatur quas.',
  })
  return (

    <div className='profile__user'>
      <div className="user">
        <div className='container__user'>


          {/*//   <Link to='/posts/'>allarticles</Link>*/}
          {/*//   <Link to='/myarticles/'>/myarticles/</Link>*/}
          {/*//   <Link to='/addarticles/'>/addarticles/</Link>*/}
          {/*//   <Link to='/profile/'>/profile/</Link>*/}
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
            <div className="user__aboutMe">{user.aboutMe}</div>
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