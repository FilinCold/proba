import {Redirect, Route} from "react-router-dom";
import User from "./Users/User";
import {useEffect, useState} from "react";


const ProtectedRoute = (route) => {
  // const isLoggedIn = false;
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const changeStateAuthorization = () => {
    setIsLoggedIn(false)
  }
  if (isLoggedIn) {
    return (
      <div className='wrapper__post' style={{display: 'flex'}}>
        <User changeStateAuthorization={changeStateAuthorization}/>
        <div>
          <Route
            path={route.path}
            exact={route.exact}
            render={(prop) => (
              <route.component {...prop} routes={route.routes}/>
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