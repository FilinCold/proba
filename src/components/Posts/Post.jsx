import React from "react";
import {NavLink} from "react-router-dom";

const Post = (props) => {

  return (
    <div className='post'>
      <div className='buttton__main'>
        <NavLink to='/' onClick={() => props.showMainBlocks()}>Main</NavLink>
      </div>
      <div className='container__posts'>
        {
          props.allPosts.map(e => {

            return e.post.map(e => {
              return <div dangerouslySetInnerHTML={{__html: e.text}}></div>
            })
          })
        }
      </div>


    </div>

  )
}


export default Post;