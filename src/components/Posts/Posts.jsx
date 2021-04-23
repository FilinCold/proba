import React, {useState} from "react";
import {logDOM} from "@testing-library/react";


const Posts = () => {
  const [posts, setPosts] = useState([
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

    }, {
      id: 4,
      data: 'August 2017',
      tag: 'TYPOGRAPHY',
      title: 'Humane Typography in the Digital Age',
      text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
        'The year when a conflict between two worlds came to its term. ' +
        'The machines of the industrial world finally took over the handicrafts',
      bigText: '.....',

    }, {
      id: 5,
      data: 'August 2017',
      tag: 'TYPOGRAPHY',
      title: 'Humane Typography in the Digital Age',
      text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
        'The year when a conflict between two worlds came to its term. ' +
        'The machines of the industrial world finally took over the handicrafts',
      bigText: '.....',

    }, {
      id: 6,
      data: 'August 2017',
      tag: 'TYPOGRAPHY',
      title: 'Humane Typography in the Digital Age',
      text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
        'The year when a conflict between two worlds came to its term. ' +
        'The machines of the industrial world finally took over the handicrafts',
      bigText: '.....',

    }, {
      id: 7,
      data: 'August 2017',
      tag: 'TYPOGRAPHY',
      title: 'Humane Typography in the Digital Age',
      text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
        'The year when a conflict between two worlds came to its term. ' +
        'The machines of the industrial world finally took over the handicrafts',
      bigText: '.....',

    }, {
      id: 8,
      data: 'August 2017',
      tag: 'TYPOGRAPHY',
      title: 'Humane Typography in the Digital Age',
      text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
        'The year when a conflict between two worlds came to its term. ' +
        'The machines of the industrial world finally took over the handicrafts',
      bigText: '.....',

    }, {
      id: 9,
      data: 'August 2017',
      tag: 'TYPOGRAPHY',
      title: 'Humane Typography in the Digital Age',
      text: 'An Essay on Typography by Eric Gill takes the reader back to the year 1930. ' +
        'The year when a conflict between two worlds came to its term. ' +
        'The machines of the industrial world finally took over the handicrafts',
      bigText: '.....',

    },
  ])

  // const changeText = () => {
  //   setPosts(posts.map(p => {
  //     if (p.id == 2) {
  //       return {
  //         ...p,
  //         title: 'Ho'
  //       }
  //     }
  //    return {...p}
  //   }))
  // }

  return (
    <div> {
      posts.map(p => {

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
              <a href='#'>Read</a>
            </div>

          </div>

        )


      })
    }
      {/*<button onClick={changeText}>Change</button>*/}
    </div>
  )
}


export default Posts;