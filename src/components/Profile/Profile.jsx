import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

  return (

    <div className=''>
      <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />

      <MyPostsContainer profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    </div>
  )
}


export default Profile;
