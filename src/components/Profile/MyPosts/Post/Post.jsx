import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <div> 
          <img src={'https://www.tagmydeals.com/images/no-img-avatar.jpg'} />
          {props.message}
        </div>

        <div>{`likes  ${props.likeCount}`}</div>
      </div>
    </div>
  )
}
export default Post;
