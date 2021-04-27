import React, {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";
import {NavLink} from "react-router-dom";


const Posts = (props) => {

    let [counter, setCounter] = useState(0)

    const changeCounterOnClickNext = () => {

        setCounter(++counter);
    }

    const changeCounterOnClickPrev = () => {

        setCounter(--counter);
    }
    const showPosts = (posts) => {
      // console.log(posts)
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
                            <NavLink exact to={`/post/:${p.id}`}>Read</NavLink>
                        </div>

                    </div>

                )
            })
        }
        return <p>К сожалению, постов больше нет....</p>

    }

    return (

        <div className="posts__container">

            {
                showPosts(props.posts)
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