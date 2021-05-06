import React, {useState} from "react";
import SignIn from "../Account/Login/SignIn";
import Posts from "../Posts/Posts";


const IfWeDontAuth = () => {
  const [check, setCheck] = useState(false);
  const setLogIn = () => {
    setCheck(true);
  }
  return (
    <div className='wrapper__signin-posts'>
      {
        !check
          ?
          <div className='wrapper__button-posts '>
            <div className='container__button'>
              <button onClick={setLogIn}>Sign In</button>

            </div>
            <div className='wrapper__posts'>
              <Posts/>
            </div>
          </div>
          : <SignIn />
      }


    </div>
  )
}


export default IfWeDontAuth;