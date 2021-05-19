import React, {useEffect, useState} from "react";
import {getUser} from "../../services";

const Profile = () => {

  const [profile, setProfile] = useState({
    name: '',
    aboutme: '',
    img: '',
  });

  useEffect(() => {
    getUser()
      .then(data => setProfile(() => {
        return {
          ...profile,
          name: data.map(d => {
            if (d.email === localStorage.getItem('email')) {
              return d.name
            }
          }),
          aboutme: data.map(d => {
          return d.aboutme
        })
        }
      }))
  }, []);


  return (
    <div className='wrapper__post'>
      <h2>Profile</h2>
      <div className="change__data-profile">
        <div className="profile-block">
          <span>Name: </span>
          <span>{profile.name}</span>
        </div>
        <div className="profile-block">
          <span>About me: </span>
          <span>{profile.aboutme}</span>
        </div>
      </div>
    </div>
  )
}

export default Profile;