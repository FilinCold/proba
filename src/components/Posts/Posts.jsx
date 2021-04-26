import React, {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";


const Posts = () => {
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
    let [counter, setCounter] = useState(0)

    const changeCounterOnClickNext = () => {

        setCounter(++counter);
    }

    const changeCounterOnClickPrev = () => {
        // let check = true;
        setCounter(--counter);


    }
    const showPosts = () => {
        if(posts[counter] !== undefined ) {
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
                            <a href='#'>Read</a>
                        </div>

                    </div>

                )
            })
        }
        return <p>К сожалению, постов больше нет....</p>

    }
    // debugger;
    return (

        <div className="posts__container">

            {

                showPosts()
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