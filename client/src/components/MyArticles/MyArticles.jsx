import React, {useEffect, useState} from "react";

import {getAllPosts} from "../../services";
import $ from 'jquery'

const MyArticles = () => {

  const [posts, setPosts] = useState(false);
  useEffect(() => {
    getAllPosts()
      .then(data => setPosts(data))
  },[])

  return (
    <div className='wrapper__post'>
      {
        posts
          ? posts.map((element, index) => {
            console.log(`==========>element`, element);
            if(element.hashtag) {
              return (
                <div className='style__mypost' dangerouslySetInnerHTML={{__html: element.hashtag}} key={index}></div>
              )
            }


          })
          :
          null
      }
    </div>
  )
}

export default MyArticles;