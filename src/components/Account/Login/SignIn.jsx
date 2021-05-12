import React, {useState} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {Redirect} from 'react-router'


const SignIn = (props) => {
  console.log(`==========>props`, props);
  const history = useHistory();
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',

  });
  const handleSubmit = (e) => {
    e.preventDefault()
    // props.setCheck(true)
    console.log(formLogin.email);
    console.log(formLogin.password);
    localStorage.setItem('isAuth', 'true');
  }
  const handleSignUpClick = () => {
    history.push('/signup/')
  }
  const handleOnChange = (e, property) => {

    setFormLogin((prevProps) => {
      return {
        ...prevProps,
        [property]: e.target.value
      }
    })
  }
  return (
    <div className='wrapper__login-register'>
      <div className="container__h2">
        <h2>Sign In</h2>
      </div>

      <form onSubmit={handleSubmit} action="#" className='container__form'>
        <div className='form__box'>
          <div className="box-label">
            <label htmlFor="" className='style-label'>Email</label>
          </div>
          <div className='box-input'>
            <input value={formLogin.email} onChange={(e) => handleOnChange(e, 'email')} type="email"/>
          </div>
        </div>
        <div className='form__box'>
          <div className="box-label">
            <label htmlFor="" className='style-label'>Password</label>
          </div>
          <div className='box-input'>
            <input value={formLogin.password} onChange={(e) => handleOnChange(e, 'password')} type="password"/>
          </div>
        </div>
        <div className='form__box'>
          <div className='box-input'>
            <input id='style-submit' type="submit" value='Sign In'/>
          </div>
        </div>
        <div className='block-text'>
          <span>Not a member? <button className='register-link' onClick={handleSignUpClick}>Sign up now</button></span>
        </div>
      </form>

    </div>
  )
}

export default SignIn