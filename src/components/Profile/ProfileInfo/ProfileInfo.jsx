import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {  //t.e. esli profile net(null) ili on undefined
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length){ 
      props.savePhoto(e.target.files[0]);
    }
  }
  return (

    <div>
      <div className={s.descriptionBlock}>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <div className={s.nameId}>
          <div className={s.fullName}>{props.profile.fullName}</div>
          <div className={s.userId}>{`id: ${props.profile.userId}`}</div>
        </div>
        <img src={(props.profile.photos.large != null) ? props.profile.photos.large : 'https://www.tagmydeals.com/images/no-img-avatar.jpg'} />

      </div>
      <div className={s.addPhoto}>
        {props.isOwner && <input onChange={onMainPhotoSelected} type={'file'} />}{/* t.e. esli pervoe znachenie =true kod vipolnaetsa dalshe, esli false-do vtorogo znacheniya ne dohodit */}
      </div>
    </div>
  )
}
export default ProfileInfo;
