import React from 'react';
import { addPost } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => { 
  return {
    posts: state.profilePage.postArray,
    newPostText: state.profilePage.newPostText,  
    profile: state.profilePage.profile,

  }

}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPost(newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
