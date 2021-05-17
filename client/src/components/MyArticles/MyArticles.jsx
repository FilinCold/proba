import React, {useEffect, useState} from "react";
import {getAllPosts} from "../../services";


const MyArticles = () => {
  const [posts, setPosts] = useState(false);
  const showPosts = () => {
    setPosts([

    ])
  }
  useEffect(() => {
    getAllPosts()
      .then(data => setPosts(data))
  },[])


  return (
    <div className='wrapper__post'>
      <h2>MyArticles</h2>

      {
        posts
          ? posts.map((element, index) => {
            return (
              <div className='wrapper__post' dangerouslySetInnerHTML={{__html: element.text}} key={index}></div>
            )
          })
          : null
      }
    </div>

  )
}


export default MyArticles;