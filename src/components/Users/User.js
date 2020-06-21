import React from 'react';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';

let User = (props) => {
    let u = props.user; 
    
    return (
        <div  >
            <div className={s.userElement}>
                <div className={s.imageBlock}>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.userImg} src={(u.photos.small != null) ? u.photos.small : 'https://www.tagmydeals.com/images/no-img-avatar.jpg'} />
                    </NavLink>
                    <div className={s.following}>

                        {(u.followed == true)       //DISABLED parametr v button, eli disabled = true knopka otkluchaetsa
                            ? <button disabled={props.inProgress.some(id => id === u.id)} onClick={() => {//metod some(esli kto nibyd iz massiva = id vipolnaetsa metod)
                                props.unFollow(u.id)
                            }
                            }>Unfollow</button>

                            : <button disabled={props.inProgress.some(id => id === u.id)} onClick={() => {/////SOME^^^^
                                props.follow(u.id)
                            }
                            }>Follow </button>}

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
        </div>



    )

}
export default User;