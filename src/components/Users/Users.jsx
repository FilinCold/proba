import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import User from "./User";

// const Users = ({route}) => {
//
//   return (
//     <div></div>
//   )
// }
const Users = (props) => {
  const history = useHistory();


  const [check, setCheck] = useState(false)
  const [user, setUser] = useState({
    id: 0,
    img: 'https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg',
    firstName: 'John',
    lastName: 'Doe',
    aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, earum libero mollitia officia pariatur quas.',
  })
  const logIn = () => {
    history.push('/login');
    props.setCheckSignIn(true)
    // setCheck(true)
  }
  const logOut = () => {
    setCheck(false)
  }

  return (
    <div className='profile__user'>
      <div className="user">
        {check ? <User user={user}/> : null}
      </div>
      <div className="container__button">
        {/*{check*/}
        {/*  ? <button*/}
        {/*    onClick={logOut}*/}
        {/*  >*/}
        {/*    Logout*/}
        {/*  </button>*/}
        {/*  : <button*/}
        {/*    onClick={logIn}*/}
        {/*  >*/}
        {/*    LogIn*/}
        {/*  </button>*/}
        {/*}*/}
      </div>
    </div>
  )
}


export default Users;