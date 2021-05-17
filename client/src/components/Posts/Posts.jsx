import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import Post from "./Post";


const Posts = (props) => {
  const posts = [
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

  ];

  let [counter, setCounter] = useState(0);
  const [check, setCheck] = useState(true);

  const changeCounterOnClickNext = () => {

    setCounter(++counter);
  }
  const changeCounterOnClickPrev = () => {

    setCounter(--counter);
  }


  const showPosts = (posts) => {

    if (posts[counter] !== undefined) {
      return posts[counter].map(p => {
        return (
          <div className='wrapper__post' key={p.id}>

            <div className="date-tag">
              <span>{p.data.toUpperCase()}</span>
              <span>{p.tag}</span>
            </div>
            <div className="title">
              {p.title}
            </div>
            <div className="text">
              {p.text}
            </div>
            <div className="show-post">
              <NavLink to={`/posts/:${p.id}`}>Read</NavLink>
            </div>
          </div>
        )

      })
    }
    return <p>К сожалению, постов больше нет....</p>

  }

  return (

    <div className="wrapper__post">

      {
        showPosts(posts)
      }
      <div className="wrapper__button">
        <div className="button__prev">
          <button className={counter == 0 ? "btnNotActive" : null}
                  onClick={counter == 0 ? null : changeCounterOnClickPrev}>PREV
          </button>
        </div>

        <div className="button__next">
          <button onClick={changeCounterOnClickNext}>NEXT</button>
        </div>
      </div>
    </div>

  )
}


export default Posts;