import React from "react";
import {NavLink} from "react-router-dom";

const Post = (props) => {
  return (

    <div className='container__post'>
      <div className='buttton__main'>
        <NavLink to='/'>Main</NavLink>
      </div>
      <div className="post">
        <h1>Humane Typography in the Digital Age</h1>
        <ul>
          <li>The first transition</li>
          <li>The digital age</li>
          <li>Loss of humanity through transitions</li>
          <li>Chasing perfection</li>
        </ul>
      </div>
    </div>
  )
}


export default Post;