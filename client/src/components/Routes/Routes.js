import React from 'react';

import User from "../Users/User";
import Posts from "../Posts/Posts";
import MyArticles from "../MyArticles/MyArticles";
import AddArticles from "../AddArticles/AddArticles";
import Profile from "../Profile/Profile";
import IfWeDontAuth from "../IfWeDontAuth/IfWeDontAuth";
import SignUp from "../Account/Register/SignUp";
import Post from "../Posts/Post";


const routes = [
  {
    path: '/main/',
    component: User,
    withAuth: true,
    exact: true,
  },
  {
    path: '/posts/',
    component: Posts,
    withAuth: true,
    exact: true,
  },
  {
    path: '/posts/:id',
    component: Post,
    exact: true,

  },
  {
    path: '/myarticles/',
    component: MyArticles,
    withAuth: true,
    exact: true,
  },
  {
    path: '/addarticles/',
    component: AddArticles,
    withAuth: true,
    exact: true,
  },
  {
    path: '/profile/',
    component: Profile,
    withAuth: true,
    exact: true,
  },
  {
    path: '/signin/',
    component: IfWeDontAuth,
    withAuth: false,
    exact: true,
  },
  {
    path: '/signup/',
    component: SignUp,
    withAuth: false,
    exact: true,
  },

]


export default routes;