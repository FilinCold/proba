import {Redirect, Route, useHistory} from "react-router-dom";
import User from "./Users/User";
import {useEffect, useState} from "react";


const ProtectedRoute = (route) => {
  // const isLoggedIn = false;
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const changeStateAuthorization = () => {

    localStorage.removeItem('token');
    history.push('/signin/');
    // setIsLoggedIn(false)
  }
  let isAuth = Boolean(localStorage.getItem('token'));
  if (isAuth) {
    return (
      <div className='wrapper__post' style={{display: 'flex'}}>
        <User changeStateAuthorization={changeStateAuthorization}/>
        <div>
          <Route
            path={route.path}
            exact={route.exact}
            render={(prop) => (
              <route.component {...prop} routes={route.routes} />
            )}
          />
        </div>
      </div>
    );
  }

  return (
    !window.location.href.includes('/signin/')
      ?
      <Redirect
        to={{
          pathname: '/signin/',
        }}
      />
      :
      <Redirect
        to={{
          pathname: '/signup/',
        }}
      />


  )
}

export default ProtectedRoute;