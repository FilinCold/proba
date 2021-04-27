import './App.css';
import Posts from "./components/Posts/Posts";
import { Route } from "react-router-dom"
import Users from "./components/Users/Users";
import MyArticles from "./components/MyArticles/MyArticles";
import AddArticles from "./components/AddArticles/AddArticles";
import Profile from "./components/Profile/Profile";
import VerticalLine from "./components/VerticalLine/VerticalLine";
import {useState} from "react";
import Post from "./components/Posts/Post";

function App() {
  const [posts, setPosts] = useState([
    [
      {
        id: 0,
        data: 'August 2017',
        tag: 'TYPOGRAPHY',
        title: 'Humane Typography in the Digital Age',
        text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
          'The year when a conflict between two worlds came to its term. ' +
          'The machines of the industrial world finally took over the handicrafts',
        bigText: '.....',

      }, {
      id: 1,
      data: 'August 2017',
      tag: 'TYPOGRAPHY',
      title: 'Humane Typography in the Digital Age',
      text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
        'The year when a conflict between two worlds came to its term. ' +
        'The machines of the industrial world finally took over the handicrafts',
      bigText: '.....',

    }, {
      id: 2,
      data: 'August 2017',
      tag: 'TYPOGRAPHY',
      title: 'Humane Typography in the Digital Age',
      text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
        'The year when a conflict between two worlds came to its term. ' +
        'The machines of the industrial world finally took over the handicrafts',
      bigText: '.....',

    }, {
      id: 3,
      data: 'August 2017',
      tag: 'TYPOGRAPHY',
      title: 'Humane Typography in the Digital Age',
      text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
        'The year when a conflict between two worlds came to its term. ' +
        'The machines of the industrial world finally took over the handicrafts',
      bigText: '.....',

    },
      {
        id: 4,
        data: 'August 2017',
        tag: 'TYPOGRAPHY',
        title: 'Humane Typography in the Digital Age',
        text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
          'The year when a conflict between two worlds came to its term. ' +
          'The machines of the industrial world finally took over the handicrafts',
        bigText: '.....',

      },
    ],
    [
      {
        id: 5,
        data: 'August 2017',
        tag: 'TYPOGRAPHY',
        title: 'Humane Typography in the Digital Age',
        text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
          'The year when a conflict between two worlds came to its term. ' +
          'The machines of the industrial world finally took over the handicrafts',
        bigText: '.....',

      },
      {
        id: 6,
        data: 'August 2017',
        tag: 'TYPOGRAPHY',
        title: 'Humane Typography in the Digital Age',
        text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
          'The year when a conflict between two worlds came to its term. ' +
          'The machines of the industrial world finally took over the handicrafts',
        bigText: '.....',

      },
      {
        id: 7,
        data: 'August 2017',
        tag: 'TYPOGRAPHY',
        title: 'Humane Typography in the Digital Age',
        text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
          'The year when a conflict between two worlds came to its term. ' +
          'The machines of the industrial world finally took over the handicrafts',
        bigText: '.....',

      },
      {
        id: 8,
        data: 'August 2017',
        tag: 'TYPOGRAPHY',
        title: 'Humane Typography in the Digital Age',
        text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
          'The year when a conflict between two worlds came to its term. ' +
          'The machines of the industrial world finally took over the handicrafts',
        bigText: '.....',

      },
      {
        id: 9,
        data: 'August 2017',
        tag: 'TYPOGRAPHY',
        title: 'Humane Typography in the Digital Age',
        text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
          'The year when a conflict between two worlds came to its term. ' +
          'The machines of the industrial world finally took over the handicrafts',
        bigText: '.....',

      },
    ]

  ])
  return (
    <div className="wrapper__user-posts">
      <div className="wrapper__user">
        <Route exact path='/' render={() => <Users/>} />

      </div>

      <div >
        <Route exact path='/' render={() => <VerticalLine  />} />

      </div>

      <div className='wrapper__posts'>
        <Route exact path='/' render={() => <Posts posts={posts}/>} />
        <Route path='/allarticles' render={() => <Posts posts={posts}/>}/>
        <Route path='/myarticles'  render={() => <MyArticles />}/>
        <Route path='/addarticles' render={() => <AddArticles />}/>
        <Route path='/profile' render={() => <Profile />}/>
        {posts.map(p => {
          return (
            <Route exact path={`/post/:${p.id}`} render={() => <Post posts={posts}/>}/>
          )
        })}
      </div>

    </div>
  );
}

export default App;
