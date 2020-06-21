import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../Common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators';




const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogElements = state.dialogsArray
        .map((dialogs) => <DialogItem name={dialogs.name} id={dialogs.id} img={dialogs.img} />);

    let messagesElements = state.messagesArray
        .map((message) => <Message css={(message.id == 1) ? s.myMessage : s.message} message={message.message} id={message.id} img={message.img} />);


    let addNewMessage=(values)=>{     
        props.updateMyMessage(values.newMessageBody);

    }


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                <div>{dialogElements}</div>

            </div>
            <div className={s.messagesBlock}>

                {messagesElements}


                <AddMessageFormRedux onSubmit={addNewMessage} />

            </div>
        </div>
    )
}
const maxLength = maxLengthCreator(100);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.addTextArea}>
                <div>
                    <Field className={s.textArea} component={Textarea} name='newMessageBody' placeholder='Enter your message' validate={[required,maxLength]}  />
                </div>

                <div><button className={s.btnMessage}>Send</button></div>
            </div>
        </form >
    )
}
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)


export default Dialogs;