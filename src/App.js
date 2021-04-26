import './App.css';
import Posts from "./components/Posts/Posts";
import { Route } from "react-router-dom"
import Users from "./components/Users/Users";
import MyArticles from "./components/MyArticles/MyArticles";
import AddArticles from "./components/AddArticles/AddArticles";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="wrapper__user-posts">
      <div className="wrapper__user">
        <Users/>
      </div>

      <div className="vertical__line"></div>

      <div className='wrapper__posts'>
        <Route exact path='/' render={() => <Posts />} />
        <Route path='/allarticles' render={() => <Posts />}/>
        <Route path='/myarticles'  render={() => <MyArticles />}/>
        <Route path='/addarticles' render={() => <AddArticles />}/>
        <Route path='/profile' render={() => <Profile />}/>
      </div>

    </div>
  );
}

export default App;
