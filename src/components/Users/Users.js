import React from 'react';
import s from './Users.module.css';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';

let Users = (props) => {
    debugger
    return (
        < div >
            <div className={s.heading}>
                Users
            </div>
            <Paginator currentPage={props.currentPage} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged} />

            <div className={s.usersBlock}>
                {props.users.map((u) => {
                    return <User user={u} inProgress={props.inProgress} follow={props.follow} unFollow={props.unFollow} />
                })}

            </div>

        </div >
    )

}
export default Users;