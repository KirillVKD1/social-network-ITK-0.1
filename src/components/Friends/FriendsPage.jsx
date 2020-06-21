import React, { useState } from 'react';
import s from './../Users/Users.module.css';
import { NavLink } from 'react-router-dom';
import Paginator from '../Common/Paginator/Paginator';


const FriendsPage = (props) => {

    /* let [scrollBoolean, setScroll] = useState(false); */

    let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);

    let pages = []; //massiv nomerov straniz
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i); 


    }
    //////  Scroll friendsRequest 
/* 
      let friendsRequest = () => {
         debugger
         let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;//bottom - esli visota stranizi 2000, bottom=2000-nijnii predel
         if (windowRelativeBottom = document.documentElement.clientHeight) {//kogda bottom nahoditsa v 100px ot visoti stranizi   
            props.onPageChanged(props.currentPage + 1)
            ///OR///
    window.addEventListener('scroll', () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        if (Math.ceil(scrolled) === scrollable) { //pri yslovii true eventListener yspevaet otpravit neskolko zaprosov< nije stoit timeOut
            setScroll(true);
            if (scrollBoolean === true) {
                setScroll(false);
                props.onPageChanged(props.currentPage + 1);
            }
        }
    });
 */

    return (

        <>
            <div className={s.heading}>
                Friends
            </div>

            <Paginator currentPage={props.currentPage} totalUsersCount={props.totalFriendsCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged} />


            <div className={s.usersBlock}>
                {props.friends.map(u => <div  >
                    <div className={s.userElement}>
                        <div className={s.imageBlock}>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.userImg} src={(u.photos.small != null) ? u.photos.small : 'https://www.tagmydeals.com/images/no-img-avatar.jpg'} />
                            </NavLink>
                            <div className={s.following}>
                                {(u.followed === true) ?
                                    <button disabled={props.inProgress.some(id => id === u.id)} onClick={() => {//disable-ne pozvolaet najimat knopky esli inProgress

                                        props.unFollow(u.id)


                                    }
                                    }>Unfollow </button> : null}
                            </div>
                        </div>
                        <div className={s.userInformation}>
                            <div className={s.left}>
                                <div className={s.userInfTop}>{u.name}</div>
                                <div className={s.userInfBottom}>{u.status}</div>
                            </div>
                            <div className={s.right}>
                                <div className={s.userInfTop}>{'u.location.country '}</div>
                                <div className={s.userInfBottom}>{'u.location.city'}</div>
                            </div>
                        </div>
                    </div>
                </div>)}

            </div>
        </>

    )
}

export default FriendsPage; 