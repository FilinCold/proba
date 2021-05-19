import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {getAllPosts} from "../../../services";


const MyPosts = (props) => {

  const [posts, setPosts] = useState([]);
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    getAllPosts()
      .then(data => setPosts([data]))
  },[]);

  //  setPosts(() => {
  //         data.map(d => {
  //           console.log(`==========>dr`, dr);
  //           return d;
  //         })
  //       }))
  const changeCounterOnClickNext = () => {
    setCounter(++counter);
  }
  const changeCounterOnClickPrev = () => {
    setCounter(--counter);
  }
  const showPosts = (posts) => {
    console.log(`==========>posts`, posts);
    if (posts[counter] !== undefined) {

      return posts[counter].map(p => {
        return (
          <div className='wrapper__post' key={p.id}>

            <div className="date-tag">
              {/*<span>{p.title.toUpperCase()}</span>*/}
              <span>{p.hashtag}</span>
            </div>
            <div className="title">
              {p.title}
            </div>
            <div dangerouslySetInnerHTML={{__html: p.description}} className="text">

            </div>
            <div className="show-post">
              <NavLink to={`/myarticles/post/:${p._id}`}>Read</NavLink>
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
          <button className={posts[counter] == undefined ? "btnNotActive" : null}
                  onClick={posts[counter] == undefined ? null : changeCounterOnClickNext}>NEXT</button>
        </div>
      </div>
    </div>
  )
}

export default MyPosts;