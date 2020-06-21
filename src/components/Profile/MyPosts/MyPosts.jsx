import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from "../../../utils/validators.js";
import { Textarea } from '../../Common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10); 


const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="newPostText" component={Textarea} placeholder={'Post message'} validate={[required, maxLength10]} />
      <button >Add post</button>
    </form>
  )
}

let MyPosts = React.memo(props => { //pureComponent optimiziryet, ne delaet lishnih otrisovok, esli ne bilo izmenenii v state ili props

  /* shouldComponentUpdate(nextProps,nextState){ //doljna li componenta otrisovotsa{yslovie pri kotorom otrisyetsa}
    return nextProps!= this.props||nextState!=this.state;              //esli novii props otlichautsa ot starih ili state
  } */
  console.log('gaff');

  let onClick = (values) => {
    props.addPost(values.newPostText);

  }


  let postElements =
    props.posts.map(post => <Post profile={props.profile} message={post.message} likeCount={post.like} key={post.id} />);
  return (

    <div className={s.postsBlock}>
      <h3>My post</h3>

      <AddPostFormRedux onSubmit={onClick} />
      <div className={s.posts}>
        {postElements}
      </div>

    </div>
  )
})




let AddPostFormRedux = reduxForm({ form: 'ProfileAddPostForm' })(AddPostForm);

export default MyPosts;
