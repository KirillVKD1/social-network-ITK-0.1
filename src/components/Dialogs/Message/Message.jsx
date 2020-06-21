import React from 'react';



const Message = (props) => {


    return (

        <div className={props.css}>{props.message}</div>

    )
}

export default Message;