import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

import {editProfile, getUser} from "../../services";

import imgMan from "../../man.jpg";


const Profile = () => {

  const [profile, setProfile] = useState({
    id: '',
    name: '',
    aboutMe: '',
    img: 'https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg',
  });
  const history = useHistory();
  const [check, setCheck] = useState(false);
  useEffect(() => {
    getUser()
      .then(data => setProfile(() => {
        return {
          ...profile,
          id: data.map(d => {
            if (d.email === localStorage.getItem('email')) {
              return d._id
            }
          }).join(),
          name: data.map(d => {
            if (d.email === localStorage.getItem('email')) {
              return d.name
            }
          }).join(),
          aboutMe: data.map(d => {
            if (d.email === localStorage.getItem('email')) {
              return d.aboutMe
            }
          })
        }
      }))
  }, []);
  const changeProfile = () => {
    editProfile(profile)
      .then(data => data);
    setCheck(false);
    window.location.href = window.location.href;

  }
  const changeTextInput = (e) => {
    console.log(`==========>e.target.value`, e.target.value);
    setProfile(() => {
      return {
        ...profile,
        aboutMe: e.target.value
      }
    })

  }
  const saveUploadImg = (e) => {
    const file = e.target.files[0];
    console.log(`==========>file`, file);
  }

  return (
    <div className='wrapper__post'>
      <h2>Profile</h2>
      <div className="change__data-profile">

        <div className="profile-block">
          {
            !check
              ? <button onClick={() => setCheck(true)}>Edit</button>
              : <div className='buttons__save-cancel'>
                <div className="button__cancel">
                  <button onClick={() => setCheck(false)}>Cancel</button>
                </div>
                <div className="button__save">
                  <button onClick={changeProfile}>Save</button>
                </div>

              </div>
          }

        </div>
        <div className="profile-block">
          <span>Name: </span>
          <span>{profile.name}</span>
        </div>
        <div className="profile-block">
          <span>Image Profile: </span>
          {
            check
              ? <input onClick={(e) => {
                saveUploadImg(e)
              }} type="file"/>
              : <div className="user__img">
                <img src={imgMan} alt=""/>
              </div>
          }

        </div>
        <div className="profile-block">
          <span>About me: </span>
          {check ? <input onChange={changeTextInput} value={profile.aboutMe} type="text" name="" id=""/> :
            <span>{profile.aboutMe}</span>}
        </div>
      </div>
    </div>
  )
}

export default Profile;