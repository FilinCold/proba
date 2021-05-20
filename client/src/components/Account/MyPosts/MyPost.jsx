import React, {useEffect, useState} from "react";
import {NavLink, useHistory, useParams} from "react-router-dom";

import {getAllPosts} from "../../../services";

const MyPost = (props) => {

  const history = useHistory();
  const [post, setPost] = useState([]);
  const [counter, setCounter] = useState(0)
  const {id} = useParams();

  useEffect(() => {
    getAllPosts()
      .then(data => setPost([data]))
  }, []);
  console.log(`==========>id.split(':')[1]`, id.split(':')[1]);
  let isAuth = Boolean(localStorage.getItem('token'));
  console.log(`==========>id`, post);
  const showPost = () => {
    if (post[counter] !== undefined) {
      return post[counter].map(p => {
        if (p._id === id.split(':')[1]) {
          console.log(`==========>p._id`, p._id);
          return (
            <div dangerouslySetInnerHTML={{__html: p.text}}></div>
          )
        }
      })
    }
  }
  const showPosts = () => {
    history.push('/myarticles/')
  }

  return (
    <div className='post'>

      <div className='buttton__main1'>
        <NavLink onClick={showPosts} to={isAuth ? '/myarticles/' : '/signin/'}>Main</NavLink>
      </div>
      <div className='container__posts1'>
        {
          showPost()
        }
      </div>
    </div>
  )
}

export default MyPost;