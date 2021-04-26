import './App.css';
import Posts from "./components/Posts/Posts";
import { Route } from "react-router-dom"
import Users from "./components/Users/Users";
function App() {
  return (
    <div className="wrapper__user-posts">
      <div className="wrapper__user">
        <Users/>
      </div>

      <div className="vertical__line"></div>

      <div className='wrapper__posts'>
        <Route  render={() => <Posts />} />
      </div>

    </div>
  );
}

export default App;
