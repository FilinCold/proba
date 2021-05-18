import {
  BrowserRouter as Router, Redirect, Route,
  Switch,
} from "react-router-dom";

import routes from "./components/Routes/Routes";

import ProtectedRoute from "./components/ProtectedRoute";

import './App.scss';

const App = () => {

  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {

          return route.withAuth
            ? <ProtectedRoute
              exact={route.exact}
              key={index}
              path={route.path}
              component={route.component}
            />
            : <Route
              exact={route.exact}
              key={index}
              path={route.path}
              component={route.component}
            />
        })}
      </Switch>
      <Redirect from='/' to='/posts/'/>
    </Router>
  );
}

export default App;