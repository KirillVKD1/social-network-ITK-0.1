import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {

    let path = `/dialogs/${props.id}`;

    return (
        <div className={s.dialog}>

            <NavLink to={path} className={s.user} activeClassName={s.active}><img className={s.image} src={props.img}></img> 
            <div className={s.text}>{props.name} </div>
            </NavLink>

        </div>
    )
}

export default DialogItem;