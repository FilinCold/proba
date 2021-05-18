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
            let e
            if($(element.text).filter('h1')[0]) {
             e = $(element.text).filter('h1').get(0).outerHTML;
              console.log(`==========>e`, e);
              return (
                <div className='style__mypost' dangerouslySetInnerHTML={{__html: e}} key={index}></div>
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